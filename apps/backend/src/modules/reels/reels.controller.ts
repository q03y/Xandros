import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ReelsService } from './reels.service';
import { JwtGuard } from '@common/guards/jwt.guard';
import { Auth } from '@common/decorators/auth.decorator';
import { CreateReelDto } from './dto';

@ApiTags('reels')
@Controller('api/reels')
export class ReelsController {
  constructor(private reelsService: ReelsService) {}

  @Post()
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a reel' })
  async createReel(@Auth() user: any, @Body() createReelDto: CreateReelDto) {
    return this.reelsService.createReel(user.id, createReelDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get reels feed' })
  async getReels(@Query('limit') limit = 20, @Query('offset') offset = 0) {
    return this.reelsService.getReels(Number(limit), Number(offset));
  }

  @Get('games/:gameId')
  @ApiOperation({ summary: 'Get reels for a game' })
  async getGameReels(@Param('gameId') gameId: string, @Query('limit') limit = 10) {
    return this.reelsService.getGameReels(gameId, Number(limit));
  }
}
