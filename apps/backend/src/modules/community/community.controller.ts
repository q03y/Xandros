import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CommunityService } from './community.service';
import { JwtGuard } from '@common/guards/jwt.guard';
import { Auth } from '@common/decorators/auth.decorator';
import { CreateReviewDto, CreateCommentDto } from './dto';

@ApiTags('community')
@Controller('api/community')
export class CommunityController {
  constructor(private communityService: CommunityService) {}

  @Post('reviews')
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a game review' })
  async createReview(@Auth() user: any, @Body() createReviewDto: CreateReviewDto) {
    return this.communityService.createReview(user.id, createReviewDto);
  }

  @Get('games/:gameId/reviews')
  @ApiOperation({ summary: 'Get game reviews' })
  async getGameReviews(@Param('gameId') gameId: string) {
    return this.communityService.getGameReviews(gameId);
  }

  @Post('reviews/:reviewId/comments')
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add comment to review' })
  async createComment(
    @Auth() user: any,
    @Param('reviewId') reviewId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.communityService.createComment(user.id, {
      ...createCommentDto,
      reviewId,
    });
  }

  @Get('reviews/:reviewId/comments')
  @ApiOperation({ summary: 'Get review comments' })
  async getReviewComments(@Param('reviewId') reviewId: string) {
    return this.communityService.getReviewComments(reviewId);
  }
}
