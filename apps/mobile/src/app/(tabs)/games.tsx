import { View, Text, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { api } from '@/services/api';
import GameCard from '@/components/GameCard';

export default function GamesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: games, isLoading } = useQuery({
    queryKey: ['search-games', searchQuery],
    queryFn: () => {
      const endpoint = searchQuery
        ? `/api/games/search?q=${searchQuery}`
        : '/api/games/trending?limit=20';
      return api.get(endpoint).then(res => res.data);
    },
  });

  return (
    <View className="flex-1 bg-slate-950">
      <View className="px-4 py-4">
        <TextInput
          placeholder="Search games..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="bg-slate-800 text-white px-4 py-3 rounded-lg"
          placeholderTextColor="#94a3b8"
        />
      </View>

      <ScrollView className="px-4">
        {isLoading ? (
          <ActivityIndicator size="large" color="#0EA5E9" />
        ) : (
          <View className="gap-4">
            {games?.map((game: any) => (
              <GameCard key={game.id} game={game} horizontal />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
