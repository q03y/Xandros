import { Module } from '@nestjs/common';
import { WallpapersService } from './wallpapers.service';
import { WallpapersController } from './wallpapers.controller';
import { PrismaModule } from '@database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [WallpapersService],
  controllers: [WallpapersController],
})
export class WallpapersModule {}
