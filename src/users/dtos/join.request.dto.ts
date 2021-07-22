import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'google@gmail.com',
    description: '이메일',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'hongildong',
    description: '닉네임',
    required: true,
  })
  nickname: string;

  @ApiProperty({
    example: 'password',
    description: '비밀번호',
    required: true,
  })
  password: string;
}
