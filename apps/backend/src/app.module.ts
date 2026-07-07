import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { GamesModule } from './modules/games/games.module';
import { UsersModule } from './modules/users/users.module';
import { LibraryModule } from './modules/library/library.module';
import { CommunityModule } from './modules/community/community.module';
import { NewsModule } from './modules/news/news.module';
import { ReelsModule } from './modules/reels/reels.module';
import { WallpapersModule } from './modules/wallpapers/wallpapers.module';
import { SearchModule } from './modules/search/search.module';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    GamesModule,
    LibraryModule,
    CommunityModule,
    NewsModule,
    ReelsModule,
    WallpapersModule,
    SearchModule,
  ],
})
export class AppModule {}
