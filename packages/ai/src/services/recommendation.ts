import { GameRecommendation, UserPreferences } from './types';

export class RecommendationEngine {
  /**
   * Generate game recommendations based on user preferences
   */
  static generateRecommendations(
    userPrefs: UserPreferences,
    availableGames: any[],
    limit: number = 10,
  ): GameRecommendation[] {
    // Calculate similarity scores
    const scored = availableGames.map((game) => ({
      gameId: game.id,
      score: this.calculateGameScore(game, userPrefs),
      reason: this.generateReason(game, userPrefs),
    }));

    // Sort by score and return top N
    return scored.sort((a, b) => b.score - a.score).slice(0, limit);
  }

  /**
   * Calculate similarity score between user preferences and game
   */
  private static calculateGameScore(game: any, userPrefs: UserPreferences): number {
    let score = 0;

    // Genre match (40% weight)
    if (game.genres) {
      const genreMatches = game.genres.filter((g: string) =>
        userPrefs.favoriteGenres.includes(g),
      ).length;
      score += (genreMatches / userPrefs.favoriteGenres.length) * 40;
    }

    // Rating match (30% weight)
    if (game.rating && userPrefs.averageRating > 0) {
      const ratingDiff = Math.abs(game.rating - userPrefs.averageRating);
      score += Math.max(0, 30 - ratingDiff);
    }

    // Popularity boost (20% weight)
    if (game.rating && game.rating > 75) {
      score += 20;
    }

    // Playability match (10% weight)
    const playstyleMatch = this.matchPlaystyle(game, userPrefs.playingStyle);
    score += playstyleMatch * 10;

    return Math.min(100, score);
  }

  /**
   * Check if game matches user's playing style
   */
  private static matchPlaystyle(game: any, playingStyle: string): number {
    const multiplayer = game.platforms?.some((p: string) => p.includes('online'));

    switch (playingStyle) {
      case 'casual':
        return game.difficulty === 'easy' ? 1 : 0.5;
      case 'hardcore':
        return game.difficulty === 'hard' || game.difficulty === 'extreme' ? 1 : 0.5;
      case 'competitive':
        return multiplayer ? 1 : 0.3;
      default:
        return 0.5;
    }
  }

  /**
   * Generate human-readable reason for recommendation
   */
  private static generateReason(game: any, userPrefs: UserPreferences): string {
    const reasons: string[] = [];

    if (game.genres?.some((g: string) => userPrefs.favoriteGenres.includes(g))) {
      reasons.push('Matches your favorite genres');
    }

    if (game.rating && game.rating > 85) {
      reasons.push('Highly rated');
    }

    if (reasons.length === 0) {
      reasons.push('Similar to games you like');
    }

    return reasons.join(', ');
  }
}
