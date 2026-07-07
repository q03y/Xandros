// User Types
export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
}

// Game Types
export interface Game {
  id: string | number;
  name?: string;
  title?: string;
  description?: string;
  rating?: number;
  released?: string;
  background_image?: string;
  genres?: string[];
  platforms?: string[];
}

// Library Types
export interface LibraryItem {
  id: string;
  userId: string;
  gameId: string;
  status: 'played' | 'playing' | 'wishlist' | 'completed';
  rating?: number;
  playtime?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Review Types
export interface Review {
  id: string;
  userId: string;
  gameId: string;
  title: string;
  content: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

// Comment Types
export interface Comment {
  id: string;
  userId: string;
  reviewId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// News Types
export interface News {
  id: string;
  title: string;
  content: string;
  gameId?: string;
  imageUrl?: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Reel Types
export interface Reel {
  id: string;
  userId: string;
  title: string;
  description?: string;
  videoUrl: string;
  gameId?: string;
  category?: 'gameplay' | 'trailer' | 'tips' | 'nostalgia' | 'funny';
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

// Wallpaper Types
export interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  gameId?: string;
  category?: 'mobile' | 'desktop' | 'console';
  resolution?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Auth Types
export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

// API Response Types
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

// Pagination Types
export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
