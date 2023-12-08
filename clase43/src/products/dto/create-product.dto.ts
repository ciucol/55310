import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'PS5',
    description: 'Nombre del producto',
    type: 'string',
  })
  @IsString()
  name: string;

  @IsString()
  description: string;

  @ApiProperty({
    example: 450,
    description: 'Precio del producto',
    type: 'number',
  })
  @IsNumber()
  price: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  stock?: number;

  @IsBoolean()
  status: boolean;

  @IsString()
  user: string;
}
