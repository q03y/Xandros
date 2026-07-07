import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma/prisma.service';
import { CreateReviewDto, CreateCommentDto } from './dto';

@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) {}

  async createReview(userId: string, createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        userId,
        ...createReviewDto,
      },
    });
  }

  async getGameReviews(gameId: string) {
    return this.prisma.review.findMany({
      where: { gameId },
      include: { author: { select: { id: true, username: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createComment(userId: string, createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        userId,
        ...createCommentDto,
      },
    });
  }

  async getReviewComments(reviewId: string) {
    return this.prisma.comment.findMany({
      where: { reviewId },
      include: { author: { select: { id: true, username: true } } },
      orderBy: { createdAt: 'asc' },
    });
  }
}
