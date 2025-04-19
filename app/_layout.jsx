import { Stack } from "expo-router";
import "./globals.css";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
export default function RootLayout() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <View style={{ flex: 1, backgroundColor: "#030014" }}>
        <StatusBar style="light" backgroundColor="#030014" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
        </Stack>
      </View>
    </QueryClientProvider>
  );
}
