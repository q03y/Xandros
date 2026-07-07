import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  if (!user) {
    return (
      <View className="flex-1 bg-slate-950 items-center justify-center">
        <View className="gap-4">
          <TouchableOpacity
            onPress={() => router.push('/auth/login')}
            className="bg-blue-600 px-8 py-3 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/auth/register')}
            className="bg-blue-600 px-8 py-3 rounded-lg"
          >
            <Text className="text-white font-bold text-center">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-slate-950 px-4 py-4">
      <Text className="text-3xl font-bold text-white mb-6">👤 Profile</Text>
      <View className="bg-slate-800 p-6 rounded-lg mb-6">
        <Text className="text-gray-400 mb-2">Username</Text>
        <Text className="text-white text-2xl font-bold mb-4">{user.username}</Text>
        <Text className="text-gray-400 mb-2">Email</Text>
        <Text className="text-white text-lg">{user.email}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          logout();
          router.push('/');
        }}
        className="bg-red-600 px-8 py-3 rounded-lg"
      >
        <Text className="text-white font-bold text-center">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
