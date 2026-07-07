import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { WallpapersService } from './wallpapers.service';
import { CreateWallpaperDto } from './dto';

@ApiTags('wallpapers')
@Controller('api/wallpapers')
export class WallpapersController {
  constructor(private wallpapersService: WallpapersService) {}

  @Post()
  @ApiOperation({ summary: 'Create wallpaper' })
  async createWallpaper(@Body() createWallpaperDto: CreateWallpaperDto) {
    return this.wallpapersService.createWallpaper(createWallpaperDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get wallpapers' })
  async getWallpapers(@Query('limit') limit = 20, @Query('offset') offset = 0) {
    return this.wallpapersService.getWallpapers(Number(limit), Number(offset));
  }

  @Get('category/:category')
  @ApiOperation({ summary: 'Get wallpapers by category' })
  async getWallpapersByCategory(@Param('category') category: string, @Query('limit') limit = 20) {
    return this.wallpapersService.getWallpapersByCategory(category, Number(limit));
  }

  @Get('games/:gameId')
  @ApiOperation({ summary: 'Get wallpapers for a game' })
  async getWallpapersByGame(@Param('gameId') gameId: string, @Query('limit') limit = 10) {
    return this.wallpapersService.getWallpapersByGame(gameId, Number(limit));
  }
}
