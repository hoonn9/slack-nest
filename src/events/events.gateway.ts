import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { onlineMap } from './onlineMap';

@WebSocketGateway({ namespace: /\/ws-.+/ })
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  // express에서 io 역할, 이것을 DI해서 사용함
  @WebSocketServer() public server;

  test(@ConnectedSocket() socket: Socket) {
    console.log(socket);
  }

  // socket.on
  @SubscribeMessage('login')
  handleLogin(
    @MessageBody() data: { id: number; channels: number[] },
    @ConnectedSocket() socket: Socket,
  ) {
    onlineMap[socket.nsp.name][socket.id] = data.id;
    socket.nsp.emit('onlineList', Object.values(onlineMap[socket.nsp.name]));
    data.channels.forEach(ch => {
      socket.join(`${socket.nsp.name}-${ch}`);
    });
  }

  afterInit(server: Server) {
    console.log('websocker server init!');
  }
  handleConnection(@ConnectedSocket() socket: Socket) {
    console.log('disconnetion', socket.nsp.name);
    if (!onlineMap[socket.nsp.name]) {
      onlineMap[socket.nsp.name] = {};
    }

    socket.emit('hello', socket.nsp.name);
  }

  // socket.on('disconnect') 기본 제공
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    delete onlineMap[socket.nsp.name][socket.id];
    socket.nsp.emit('onlineList', Object.values(onlineMap[socket.nsp.name]));
  }
}
