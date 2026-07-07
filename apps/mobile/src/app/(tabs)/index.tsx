import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import GameCard from '@/components/GameCard';

export default function HomeScreen() {
  const { data: trendingGames, isLoading: loadingTrending } = useQuery({
    queryKey: ['trending-games'],
    queryFn: () => api.get('/api/games/trending?limit=10').then(res => res.data),
  });

  const { data: newGames, isLoading: loadingNew } = useQuery({
    queryKey: ['new-games'],
    queryFn: () => api.get('/api/games/new-releases?limit=10').then(res => res.data),
  });

  return (
    <ScrollView className="flex-1 bg-slate-950">
      <View className="px-4 py-6">
        <Text className="text-4xl font-bold text-white mb-2">🎮 Xandros</Text>
        <Text className="text-gray-400 text-lg">Discover games & connect with gamers</Text>
      </View>

      <View className="px-4 mb-6">
        <Text className="text-2xl font-bold text-white mb-4">🔥 Trending</Text>
        {loadingTrending ? (
          <ActivityIndicator size="large" color="#0EA5E9" />
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-4">
            {trendingGames?.map((game: any) => (
              <GameCard key={game.id} game={game} />
            ))}
          </ScrollView>
        )}
      </View>

      <View className="px-4 mb-6">
        <Text className="text-2xl font-bold text-white mb-4">✨ New Releases</Text>
        {loadingNew ? (
          <ActivityIndicator size="large" color="#0EA5E9" />
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-4">
            {newGames?.map((game: any) => (
              <GameCard key={game.id} game={game} />
            ))}
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
}
