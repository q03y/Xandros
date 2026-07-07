import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { GamesModule } from '../games/games.module';

@Module({
  imports: [GamesModule],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
