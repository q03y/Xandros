import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GamesService } from './games.service';

@ApiTags('games')
@Controller('api/games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get('trending')
  @ApiOperation({ summary: 'Get trending games' })
  @ApiResponse({ status: 200, description: 'List of trending games' })
  async getTrendingGames(@Query('limit') limit = 20) {
    return this.gamesService.getTrendingGames(Number(limit));
  }

  @Get('new-releases')
  @ApiOperation({ summary: 'Get new releases' })
  @ApiResponse({ status: 200, description: 'List of new released games' })
  async getNewReleases(@Query('limit') limit = 20) {
    return this.gamesService.getNewReleases(Number(limit));
  }

  @Get('search')
  @ApiOperation({ summary: 'Search games' })
  @ApiResponse({ status: 200, description: 'List of search results' })
  async searchGames(@Query('q') query: string, @Query('limit') limit = 20) {
    return this.gamesService.searchGames(query, Number(limit));
  }

  @Get('genre/:id')
  @ApiOperation({ summary: 'Get games by genre' })
  @ApiResponse({ status: 200, description: 'List of games in genre' })
  async getGamesByGenre(@Param('id') genreId: string, @Query('limit') limit = 20) {
    return this.gamesService.getGamesByGenre(genreId, Number(limit));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get game details' })
  @ApiResponse({ status: 200, description: 'Game details' })
  async getGameById(@Param('id') id: string) {
    return this.gamesService.getGameById(id);
  }
}
