import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelMembers } from 'src/entities/ChannelMembers';
import { Channels } from 'src/entities/Channels';
import { Users } from 'src/entities/Users';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { Workspaces } from 'src/entities/Workspaces';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspaces)
    private workspacesRepository: Repository<Workspaces>,
    @InjectRepository(Channels)
    private channelsRepository: Repository<Channels>,
    @InjectRepository(WorkspaceMembers)
    private workspaceMembersRepository: Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers)
    private channelMembersRepository: Repository<ChannelMembers>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,

    private connection: Connection,
  ) {}

  async findById(id: number) {
    return this.workspacesRepository.findByIds([id]);
  }

  async findMyWorkspaces(myId: number) {
    console.log('Check');
    return this.workspacesRepository
      .createQueryBuilder('workspace')
      .innerJoin(
        'workspace.WorkspaceMembers',
        'workspaceMembers',
        'workspaceMembers.UserId = :id',
        { id: myId },
      )
      .getMany();
  }

  async createWorkspace(name: string, url: string, myId: number) {
    await this.connection.transaction(async entityManager => {
      const workspace = new Workspaces();
      workspace.name = name;
      workspace.url = url;
      workspace.OwnerId = myId;
      const returned = await entityManager.save(workspace);

      const workspaceMember = new WorkspaceMembers();
      workspaceMember.UserId = myId;
      workspaceMember.WorkspaceId = returned.id;

      const channel = new Channels();
      channel.name = '일반';
      channel.WorkspaceId = returned.id;

      const [, channelReturned] = await Promise.all([
        entityManager.save(workspaceMember),
        entityManager.save(channel),
      ]);

      const channelMember = new ChannelMembers();
      channelMember.UserId = myId;
      channelMember.ChannelId = channelReturned.id;
      await entityManager.save(channelMember);
    });
  }

  async getWorkspaceMembers(url: string) {
    return this.usersRepository
      .createQueryBuilder('user')
      .innerJoin('user.WorkspaceMembers', 'members')
      .innerJoin('members.Workspace', 'workspace', 'workspace.url = :url', {
        url,
      })
      .getMany();
  }

  async getWorkspaceMember(url: string, id: number) {
    return this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .innerJoin('user.Workspaces', 'workspaces', 'workspaces.url = :url', {
        url,
      })
      .getOne();
  }

  async createWorkspaceMembers(url, email) {
    // query builder 기능 findone 에서 쓰기
    const workspace = await this.workspacesRepository.findOne({
      where: { url },
      // relations: ['Channels']
      join: {
        alias: 'workspace',
        innerJoinAndSelect: {
          channels: 'workspace.Channels',
        },
      },
    });

    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      return null;
    }

    await this.connection.transaction(async entityManager => {
      const workspaceMember = new WorkspaceMembers();
      workspaceMember.WorkspaceId = workspace.id;
      workspaceMember.UserId = user.id;
      await entityManager.save(workspaceMember);

      const channelMember = new ChannelMembers();
      channelMember.ChannelId = workspace.Channels.find(
        v => v.name === '일반',
      ).id;
      channelMember.UserId = user.id;
      await entityManager.save(channelMember);
    });
  }
}
