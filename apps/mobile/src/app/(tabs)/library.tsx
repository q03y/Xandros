import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/store/authStore';
import { api } from '@/services/api';

export default function LibraryScreen() {
  const user = useAuthStore((state) => state.user);
  const { data: libraryItems, isLoading } = useQuery({
    queryKey: ['library'],
    queryFn: () => api.get('/api/library').then(res => res.data),
    enabled: !!user,
  });

  if (!user) {
    return (
      <View className="flex-1 bg-slate-950 items-center justify-center">
        <Text className="text-white text-lg">Please login to view your library</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-slate-950 px-4 py-4">
      <Text className="text-3xl font-bold text-white mb-6">📚 My Library</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0EA5E9" />
      ) : libraryItems?.length === 0 ? (
        <Text className="text-gray-400 text-center mt-8">No games in your library yet</Text>
      ) : (
        <View className="gap-4">
          {libraryItems?.map((item: any) => (
            <View key={item.gameId} className="bg-slate-800 p-4 rounded-lg">
              <Text className="text-white font-bold">{item.gameId}</Text>
              <Text className="text-gray-400">{item.status}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
