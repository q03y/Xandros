import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto';

@ApiTags('news')
@Controller('api/news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'Create news' })
  async createNews(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.createNews(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get latest news' })
  async getLatestNews(@Query('limit') limit = 20) {
    return this.newsService.getLatestNews(Number(limit));
  }

  @Get('games/:gameId')
  @ApiOperation({ summary: 'Get news for a game' })
  async getNewsByGame(@Param('gameId') gameId: string, @Query('limit') limit = 10) {
    return this.newsService.getNewsByGame(gameId, Number(limit));
  }
}
