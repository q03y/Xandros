import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { api } from '@/services/api';
import { useAuthStore } from '@/store/authStore';

export default function LoginScreen() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/api/auth/login', { email, password });
      const { user, accessToken } = response.data;
      setAuth(user, accessToken);
      router.replace('/(tabs)');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-slate-950">
      <View className="px-6 py-12 items-center">
        <Text className="text-4xl font-bold text-white mb-2">🎮 Xandros</Text>
        <Text className="text-gray-400 mb-12">Welcome back</Text>

        {error && (
          <View className="bg-red-500 p-3 rounded-lg w-full mb-6">
            <Text className="text-white">{error}</Text>
          </View>
        )}

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="bg-slate-800 text-white px-4 py-3 rounded-lg w-full mb-4"
          placeholderTextColor="#94a3b8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="bg-slate-800 text-white px-4 py-3 rounded-lg w-full mb-6"
          placeholderTextColor="#94a3b8"
        />

        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className="bg-blue-600 px-8 py-3 rounded-lg w-full mb-4"
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-bold text-center">Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/auth/register')}>
          <Text className="text-blue-400">Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
