import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SearchService } from './search.service';

@ApiTags('search')
@Controller('api/search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Global search' })
  async globalSearch(@Query('q') query: string) {
    return this.searchService.globalSearch(query);
  }
}
