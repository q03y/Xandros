import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class CreateLibraryItemDto {
  @IsString()
  gameId: string;

  @IsString()
  @IsOptional()
  status?: 'played' | 'playing' | 'wishlist' | 'completed';

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  rating?: number;
}

export class UpdateLibraryItemDto {
  @IsString()
  @IsOptional()
  status?: 'played' | 'playing' | 'wishlist' | 'completed';

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  rating?: number;

  @IsNumber()
  @IsOptional()
  playtime?: number;
}
