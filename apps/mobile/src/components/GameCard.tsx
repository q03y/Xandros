import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface GameCardProps {
  game: {
    id: number | string;
    name?: string;
    background_image?: string;
    rating?: number;
  };
  horizontal?: boolean;
}

export default function GameCard({ game, horizontal = false }: GameCardProps) {
  const router = useRouter();

  if (horizontal) {
    return (
      <TouchableOpacity
        onPress={() => router.push(`/games/${game.id}`)}
        className="bg-slate-800 rounded-lg p-4 mb-4"
      >
        <Text className="text-white font-bold text-lg">{game.name}</Text>
        <Text className="text-yellow-400 mt-2">⭐ {game.rating?.toFixed(1)}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => router.push(`/games/${game.id}`)}
      className="bg-slate-800 rounded-lg overflow-hidden w-32"
    >
      {game.background_image && (
        <Image
          source={{ uri: game.background_image }}
          className="w-full h-40"
        />
      )}
      <View className="p-2">
        <Text className="text-white font-bold text-sm" numberOfLines={2}>
          {game.name}
        </Text>
        <Text className="text-yellow-400 text-xs mt-1">⭐ {game.rating?.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );
}
