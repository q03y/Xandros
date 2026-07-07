import { IsString, IsOptional, IsDate } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  @IsOptional()
  gameId?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsDate()
  @IsOptional()
  publishedAt?: Date;
}
