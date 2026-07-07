import { Module } from '@nestjs/common';
import { ReelsService } from './reels.service';
import { ReelsController } from './reels.controller';
import { PrismaModule } from '@database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ReelsService],
  controllers: [ReelsController],
})
export class ReelsModule {}
