import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma/prisma.service';
import { CreateLibraryItemDto, UpdateLibraryItemDto } from './dto';

@Injectable()
export class LibraryService {
  constructor(private prisma: PrismaService) {}

  async addToLibrary(userId: string, createLibraryItemDto: CreateLibraryItemDto) {
    return this.prisma.libraryItem.create({
      data: {
        userId,
        ...createLibraryItemDto,
      },
    });
  }

  async getUserLibrary(userId: string) {
    return this.prisma.libraryItem.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateLibraryItem(userId: string, gameId: string, updateDto: UpdateLibraryItemDto) {
    return this.prisma.libraryItem.update({
      where: {
        userId_gameId: {
          userId,
          gameId,
        },
      },
      data: updateDto,
    });
  }

  async removeFromLibrary(userId: string, gameId: string) {
    return this.prisma.libraryItem.delete({
      where: {
        userId_gameId: {
          userId,
          gameId,
        },
      },
    });
  }
}
