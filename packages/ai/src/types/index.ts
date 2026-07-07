export interface GameRecommendation {
  gameId: string;
  score: number;
  reason: string;
}

export interface UserPreferences {
  userId: string;
  favoriteGenres: string[];
  favoriteGameIds: string[];
  playingStyle: 'casual' | 'hardcore' | 'competitive';
  averageRating: number;
}
