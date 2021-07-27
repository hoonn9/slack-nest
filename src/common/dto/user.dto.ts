import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from '../../users/dtos/join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    example: '1',
    description: 'ID',
    required: true,
  })
  id: number;
}
