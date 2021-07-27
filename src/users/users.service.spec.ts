import { Test, TestingModule } from '@nestjs/testing';
import { getConnectionToken, getRepositoryToken } from '@nestjs/typeorm';
import { ChannelMembers } from '../entities/ChannelMembers';
import { Users } from '../entities/Users';
import { WorkspaceMembers } from '../entities/WorkspaceMembers';
import { UsersService } from './users.service';

class MockUserRepository {
  #data = [{id: 1, email: 'doge@gmail.com' }]
  async findOne({
    where: {email}
  }) {
    const data = this.#data.find((v => v.email === email));
    if(data) {
      return data;
    }
    return undefined
  }
}
class MockWorkspaceMembersRepository {}
class MockChannelMembersWRepository {}
class MockConnection {}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    // 가짜 모듈
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useClass: MockUserRepository,
        },
        {
          provide: getRepositoryToken(ChannelMembers),
          useClass: MockChannelMembersWRepository,
        },
        {
          provide: getRepositoryToken(WorkspaceMembers),
          useClass: MockWorkspaceMembersRepository,
        },
        {
          provide: getConnectionToken(),
          useClass: MockConnection,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByEmail은 이메일을 통해 유저를 찾아야한다.', () => {
    expect(service.findByEmail('doge@gmail.com')).resolves.toStrictEqual({
      email: 'doge@gmail.com',
      id: 1,
    });
  });

  // 미래에 만들 테스트
  //it.todo


  it('findByEmail은 유저를 못 찾으면 null을 반환해야 함', async () => {
    const result = await service.findByEmail('doge@gmal.com')
    expect(result).toBe(undefined);
  });
});
