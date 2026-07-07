import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma/prisma.service';
import { CreateReelDto } from './dto';

@Injectable()
export class ReelsService {
  constructor(private prisma: PrismaService) {}

  async createReel(userId: string, createReelDto: CreateReelDto) {
    return this.prisma.reel.create({
      data: {
        userId,
        ...createReelDto,
      },
    });
  }

  async getReels(limit = 20, offset = 0) {
    return this.prisma.reel.findMany({
      take: limit,
      skip: offset,
      include: { author: { select: { id: true, username: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getGameReels(gameId: string, limit = 10) {
    return this.prisma.reel.findMany({
      where: { gameId },
      take: limit,
      include: { author: { select: { id: true, username: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }
}
