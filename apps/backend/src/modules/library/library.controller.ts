import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { LibraryService } from './library.service';
import { JwtGuard } from '@common/guards/jwt.guard';
import { Auth } from '@common/decorators/auth.decorator';
import { CreateLibraryItemDto, UpdateLibraryItemDto } from './dto';

@ApiTags('library')
@Controller('api/library')
@UseGuards(JwtGuard)
@ApiBearerAuth()
export class LibraryController {
  constructor(private libraryService: LibraryService) {}

  @Get()
  @ApiOperation({ summary: 'Get user library' })
  async getUserLibrary(@Auth() user: any) {
    return this.libraryService.getUserLibrary(user.id);
  }

  @Post()
  @ApiOperation({ summary: 'Add game to library' })
  async addToLibrary(@Auth() user: any, @Body() createDto: CreateLibraryItemDto) {
    return this.libraryService.addToLibrary(user.id, createDto);
  }

  @Put(':gameId')
  @ApiOperation({ summary: 'Update library item' })
  async updateLibraryItem(
    @Auth() user: any,
    @Param('gameId') gameId: string,
    @Body() updateDto: UpdateLibraryItemDto,
  ) {
    return this.libraryService.updateLibraryItem(user.id, gameId, updateDto);
  }

  @Delete(':gameId')
  @ApiOperation({ summary: 'Remove game from library' })
  async removeFromLibrary(@Auth() user: any, @Param('gameId') gameId: string) {
    return this.libraryService.removeFromLibrary(user.id, gameId);
  }
}
