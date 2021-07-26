import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkspaceDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '마이슬랙',
    description: '워크스페이스명',
  })
  public workspace: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'slack',
    description: 'url 주소',
  })
  public url: string;
}
