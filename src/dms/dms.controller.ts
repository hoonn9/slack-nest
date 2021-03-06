import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { Users } from 'src/entities/Users';
import { DmsService } from './dms.service';
import { PostChatDto } from './dto/post-chat.dto';

@ApiTags('DM')
@Controller('api/workspaces')
export class DmsController {
  constructor(private dmsService: DmsService) {}

  @ApiOperation({ summary: '워크스페이스 DM 모두 가져오기' })
  @Get(':url/dms')
  async getWorkspaceChannels(@Param('url') url, @User() user: Users) {
    return this.dmsService.getWorkspaceDMs(url, user.id);
  }

  @ApiOperation({ summary: '워크스페이스 특정 DM 채팅 모두 가져오기' })
  @Get(':url/dms/:id/chats')
  async getWorkspaceDMChats(
    @Param('url') url,
    @Param('id') id,
    @Query('perPage') perPage,
    @Query('page') page,
    @User() user: Users,
  ) {
    return this.dmsService.getWorkspaceDMChats(
      url,
      +id,
      user.id,
      +perPage,
      +page,
    );
  }

  @ApiOperation({ summary: '워크스페이스 특정 DM 채팅 생성하기' })
  @Post(':url/dms/:id/chats')
  async createWorkspaceDMChats(
    @Param('url') url,
    @Param('id') id,
    @Body() body: PostChatDto,
    @User() user: Users,
  ) {
    return this.dmsService.postChat({
      url,
      content: body.content,
      id: +id,
      myId: user.id,
    });
  }

  @ApiOperation({ summary: '안 읽은 개수 가져오기' })
  @Get(':url/dms/:id/unreads')
  async getUnreads(@Query('after') after: number) {
    return 0;
  }
}
