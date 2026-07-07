// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
  },
  // Users
  USERS: {
    ME: '/api/users/me',
    PROFILE: (id: string) => `/api/users/${id}`,
    UPDATE: '/api/users/me',
  },
  // Games
  GAMES: {
    LIST: '/api/games',
    TRENDING: '/api/games/trending',
    NEW_RELEASES: '/api/games/new-releases',
    SEARCH: '/api/games/search',
    DETAILS: (id: string | number) => `/api/games/${id}`,
    BY_GENRE: (genreId: string) => `/api/games/genre/${genreId}`,
  },
  // Library
  LIBRARY: {
    LIST: '/api/library',
    ADD: '/api/library',
    UPDATE: (gameId: string) => `/api/library/${gameId}`,
    REMOVE: (gameId: string) => `/api/library/${gameId}`,
  },
  // Community
  COMMUNITY: {
    REVIEWS: {
      CREATE: '/api/community/reviews',
      BY_GAME: (gameId: string) => `/api/community/games/${gameId}/reviews`,
    },
    COMMENTS: {
      CREATE: (reviewId: string) => `/api/community/reviews/${reviewId}/comments`,
      LIST: (reviewId: string) => `/api/community/reviews/${reviewId}/comments`,
    },
  },
  // News
  NEWS: {
    LIST: '/api/news',
    BY_GAME: (gameId: string) => `/api/news/games/${gameId}`,
  },
  // Reels
  REELS: {
    LIST: '/api/reels',
    CREATE: '/api/reels',
    BY_GAME: (gameId: string) => `/api/reels/games/${gameId}`,
  },
  // Wallpapers
  WALLPAPERS: {
    LIST: '/api/wallpapers',
    CREATE: '/api/wallpapers',
    BY_CATEGORY: (category: string) => `/api/wallpapers/category/${category}`,
    BY_GAME: (gameId: string) => `/api/wallpapers/games/${gameId}`,
  },
  // Search
  SEARCH: '/api/search',
};

// Game Genres
export const GAME_GENRES = {
  ACTION: 'action',
  ADVENTURE: 'adventure',
  RPG: 'rpg',
  STRATEGY: 'strategy',
  PUZZLE: 'puzzle',
  RACING: 'racing',
  SPORTS: 'sports',
  SIMULATION: 'simulation',
  INDIE: 'indie',
  CASUAL: 'casual',
};

// Library Statuses
export const LIBRARY_STATUS = {
  PLAYED: 'played',
  PLAYING: 'playing',
  WISHLIST: 'wishlist',
  COMPLETED: 'completed',
};

// Reel Categories
export const REEL_CATEGORIES = {
  GAMEPLAY: 'gameplay',
  TRAILER: 'trailer',
  TIPS: 'tips',
  NOSTALGIA: 'nostalgia',
  FUNNY: 'funny',
};

// Wallpaper Categories
export const WALLPAPER_CATEGORIES = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
  CONSOLE: 'console',
};

// Rating Range
export const RATING_RANGE = {
  MIN: 0,
  MAX: 100,
};

// Pagination Defaults
export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100,
};
