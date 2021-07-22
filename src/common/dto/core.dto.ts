import { ApiProperty } from '@nestjs/swagger';

export class CoreDto {
  @ApiProperty({
    example: '1',
    description: 'ID',
    required: true,
  })
  id: number;
}
