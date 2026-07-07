import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class GamesService {
  private rawgApiKey = process.env.RAWG_API_KEY;
  private rawgBaseUrl = 'https://api.rawg.io/api';

  constructor(private prisma: PrismaService) {}

  async getTrendingGames(limit = 20) {
    try {
      const response = await axios.get(`${this.rawgBaseUrl}/games`, {
        params: {
          key: this.rawgApiKey,
          ordering: '-rating',
          page_size: limit,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching trending games:', error);
      return [];
    }
  }

  async getNewReleases(limit = 20) {
    try {
      const response = await axios.get(`${this.rawgBaseUrl}/games`, {
        params: {
          key: this.rawgApiKey,
          ordering: '-released',
          page_size: limit,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching new releases:', error);
      return [];
    }
  }

  async getGameById(id: string) {
    try {
      const response = await axios.get(`${this.rawgBaseUrl}/games/${id}`, {
        params: {
          key: this.rawgApiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching game:', error);
      return null;
    }
  }

  async searchGames(query: string, limit = 20) {
    try {
      const response = await axios.get(`${this.rawgBaseUrl}/games`, {
        params: {
          key: this.rawgApiKey,
          search: query,
          page_size: limit,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error searching games:', error);
      return [];
    }
  }

  async getGamesByGenre(genreId: string, limit = 20) {
    try {
      const response = await axios.get(`${this.rawgBaseUrl}/games`, {
        params: {
          key: this.rawgApiKey,
          genres: genreId,
          page_size: limit,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching games by genre:', error);
      return [];
    }
  }
}
