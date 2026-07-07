import { IsString, IsOptional } from 'class-validator';

export class CreateReelDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  videoUrl: string;

  @IsString()
  @IsOptional()
  gameId?: string;

  @IsString()
  @IsOptional()
  category?: 'gameplay' | 'trailer' | 'tips' | 'nostalgia' | 'funny';
}
