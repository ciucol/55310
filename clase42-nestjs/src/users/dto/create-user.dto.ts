import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The user name',
    example: 'Mate',
  })
  name: string;

  lastname: string;
}
