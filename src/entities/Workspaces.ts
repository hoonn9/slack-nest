import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Channels } from './Channels';
import { DMs } from './DMs';
import { Mentions } from './Mentions';
import { WorkspaceMembers } from './WorkspaceMembers';
import { Users } from './Users';
import { IsNotEmpty, IsString } from 'class-validator';

@Index('name', ['name'], { unique: true })
@Index('url', ['url'], { unique: true })
@Index('OwnerId', ['OwnerId'], {})
@Entity({ database: 'slack', name: 'workspaces' })
export class Workspaces {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'name', unique: true, length: 30 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'url', unique: true, length: 30 })
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column('int', { name: 'OwnerId', nullable: true })
  OwnerId: number | null;

  @OneToMany(
    () => Channels,
    channels => channels.Workspace,
    { cascade: ['insert'] },
  )
  Channels: Channels[];

  @OneToMany(
    () => DMs,
    dms => dms.Workspace,
  )
  DMs: DMs[];

  @OneToMany(
    () => Mentions,
    mentions => mentions.Workspace,
  )
  Mentions: Mentions[];

  @OneToMany(
    () => WorkspaceMembers,
    workspacemembers => workspacemembers.Workspace,
    { cascade: ['insert'] },
  )
  WorkspaceMembers: WorkspaceMembers[];

  @ManyToOne(
    () => Users,
    users => users.Workspaces,
    {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'OwnerId', referencedColumnName: 'id' }])
  Owner: Users;

  @ManyToMany(
    () => Users,
    users => users.Workspaces,
  )
  Members: Users[];
}
