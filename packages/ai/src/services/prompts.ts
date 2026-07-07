export class PromptTemplates {
  /**
   * Generate a prompt for game analysis
   */
  static gameAnalysisPrompt(game: any): string {
    return `Analyze the following game and provide insights:

Game: ${game.name}
Genre: ${game.genres?.join(', ')}
Rating: ${game.rating}/100
Platforms: ${game.platforms?.join(', ')}

Provide a brief analysis covering:
1. Game highlights
2. Who would enjoy this game
3. Potential drawbacks`;
  }

  /**
   * Generate a prompt for review generation
   */
  static reviewGenerationPrompt(game: any, userRating: number): string {
    return `Based on this game information, suggest a review structure:

Game: ${game.name}
User Rating: ${userRating}/100

Suggest sections for a thoughtful review.`;
  }

  /**
   * Generate a prompt for recommendation explanation
   */
  static recommendationPrompt(game: any, reason: string): string {
    return `Explain why this game is recommended:

Game: ${game.name}
Reason: ${reason}

Provide a compelling 2-3 sentence explanation.`;
  }
}
