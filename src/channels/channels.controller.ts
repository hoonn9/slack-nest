import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Channel')
@Controller('api/workspaces/:workspace/channels')
export class ChannelsController {
  @Get()
  getChannels() {}

  @Post()
  createChannel() {}

  @Get(':name')
  getSpecificChannel() {}

  @Post()
  postChat() {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  InviteMembers() {}
}
