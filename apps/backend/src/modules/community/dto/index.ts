import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  gameId: string;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  rating: number;
}

export class CreateCommentDto {
  @IsString()
  @IsOptional()
  reviewId?: string;

  @IsString()
  content: string;
}
