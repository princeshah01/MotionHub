import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  View,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/service/queryFuntions";
import MovieCard from "@/components/MovieCard";
export default function Index() {
  const router = useRouter();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
  });
  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="light" />
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
          style={{ width: 70, height: 50 }}
        />

        {isLoading ? (
          <ActivityIndicator
            size={30}
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : isError ? (
          <Text>{error}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() =>
                router.push({
                  pathname: "/search",
                  params: { shouldFocus: "true" },
                })
              }
              placeHolder="Search for a movies"
            />
            <>
              <Text className="text-xl text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={data.results}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  marginBottom: 10,
                  paddingRight: 5,
                  gap: 20,
                }}
                renderItem={({ item }) => <MovieCard {...item} />}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
