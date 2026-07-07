import { IsString, IsOptional } from 'class-validator';

export class CreateWallpaperDto {
  @IsString()
  title: string;

  @IsString()
  imageUrl: string;

  @IsString()
  @IsOptional()
  gameId?: string;

  @IsString()
  @IsOptional()
  category?: 'mobile' | 'desktop' | 'console';

  @IsString()
  @IsOptional()
  resolution?: string;
}
