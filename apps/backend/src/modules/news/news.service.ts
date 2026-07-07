import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma/prisma.service';
import { CreateNewsDto } from './dto';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async createNews(createNewsDto: CreateNewsDto) {
    return this.prisma.news.create({
      data: createNewsDto,
    });
  }

  async getLatestNews(limit = 20) {
    return this.prisma.news.findMany({
      take: limit,
      orderBy: { publishedAt: 'desc' },
    });
  }

  async getNewsByGame(gameId: string, limit = 10) {
    return this.prisma.news.findMany({
      where: { gameId },
      take: limit,
      orderBy: { publishedAt: 'desc' },
    });
  }
}
