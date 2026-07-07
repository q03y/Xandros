import { Injectable } from '@nestjs/common';
import { GamesService } from '../games/games.service';

@Injectable()
export class SearchService {
  constructor(private gamesService: GamesService) {}

  async globalSearch(query: string) {
    const games = await this.gamesService.searchGames(query, 10);
    
    return {
      games,
      total: games.length,
    };
  }
}
