import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DMs } from 'src/entities/DMs';
import { Users } from 'src/entities/Users';
import { Workspaces } from 'src/entities/Workspaces';
import { EventsGateway } from 'src/events/events.gateway';
import { DmsController } from './dms.controller';
import { DmsService } from './dms.service';

@Module({
  imports: [TypeOrmModule.forFeature([DMs, Users, Workspaces])],
  controllers: [DmsController],
  providers: [DmsService, EventsGateway],
})
export class DmsModule {}
