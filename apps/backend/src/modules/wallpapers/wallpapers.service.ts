import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma/prisma.service';
import { CreateWallpaperDto } from './dto';

@Injectable()
export class WallpapersService {
  constructor(private prisma: PrismaService) {}

  async createWallpaper(createWallpaperDto: CreateWallpaperDto) {
    return this.prisma.wallpaper.create({
      data: createWallpaperDto,
    });
  }

  async getWallpapers(limit = 20, offset = 0) {
    return this.prisma.wallpaper.findMany({
      take: limit,
      skip: offset,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getWallpapersByCategory(category: string, limit = 20) {
    return this.prisma.wallpaper.findMany({
      where: { category },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getWallpapersByGame(gameId: string, limit = 10) {
    return this.prisma.wallpaper.findMany({
      where: { gameId },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  }
}
