import { z } from 'zod';

// Auth Schemas
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const RegisterSchema = z.object({
  username: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

// User Schemas
export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Library Schemas
export const LibraryItemSchema = z.object({
  gameId: z.string(),
  status: z.enum(['played', 'playing', 'wishlist', 'completed']).optional(),
  rating: z.number().min(0).max(100).optional(),
});

export const UpdateLibraryItemSchema = z.object({
  status: z.enum(['played', 'playing', 'wishlist', 'completed']).optional(),
  rating: z.number().min(0).max(100).optional(),
  playtime: z.number().optional(),
});

// Review Schemas
export const CreateReviewSchema = z.object({
  gameId: z.string(),
  title: z.string().min(5),
  content: z.string().min(10),
  rating: z.number().min(0).max(100),
});

// Comment Schemas
export const CreateCommentSchema = z.object({
  content: z.string().min(1),
  reviewId: z.string().optional(),
});

// News Schemas
export const CreateNewsSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(10),
  gameId: z.string().optional(),
  imageUrl: z.string().url().optional(),
  publishedAt: z.date().optional(),
});

// Reel Schemas
export const CreateReelSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  videoUrl: z.string().url(),
  gameId: z.string().optional(),
  category: z.enum(['gameplay', 'trailer', 'tips', 'nostalgia', 'funny']).optional(),
});

// Wallpaper Schemas
export const CreateWallpaperSchema = z.object({
  title: z.string().min(3),
  imageUrl: z.string().url(),
  gameId: z.string().optional(),
  category: z.enum(['mobile', 'desktop', 'console']).optional(),
  resolution: z.string().optional(),
});

// Search Schemas
export const SearchSchema = z.object({
  q: z.string().min(1).max(100),
  limit: z.number().min(1).max(100).optional(),
});
