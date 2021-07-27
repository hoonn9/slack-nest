import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Connection, Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { ChannelMembers } from 'src/entities/ChannelMembers';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,

    @InjectRepository(WorkspaceMembers)
    private workspaceMembersRepository: Repository<WorkspaceMembers>,

    @InjectRepository(ChannelMembers)
    private channelMembersRepository: Repository<ChannelMembers>,
    private connection: Connection,
  ) {}

  async findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password'],
    });
  }

  async join(email: string, nickname: string, password: string) {
    if (!email) {
      throw new BadRequestException('이메일을 입력하세요.');
    }

    if (!nickname) {
      throw new BadRequestException('닉네임을 입력하세요.');
    }

    if (!password) {
      throw new BadRequestException('비밀번호를 입력하세요.');
    }

    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
    }

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new Users();
      newUser.email = email;
      newUser.nickname = nickname;
      newUser.password = hashedPassword;

      const returned = await queryRunner.manager.save(newUser);

      const newWorkspaceMember = new WorkspaceMembers();
      newWorkspaceMember.UserId = returned.id;
      newWorkspaceMember.WorkspaceId = 1;

      await queryRunner.manager.save(newWorkspaceMember);

      const newChannelMember = new ChannelMembers();
      newChannelMember.UserId = returned.id;
      newChannelMember.ChannelId = 1;

      await queryRunner.manager.save(newChannelMember);

      await queryRunner.commitTransaction();
    } catch (error) {
      Logger.error(error);
      await queryRunner.rollbackTransaction();
      return false;
    } finally {
      await queryRunner.release();
    }
    return true;
  }
}
