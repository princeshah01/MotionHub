import { Image, View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/service/queryFuntions";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Search = ({ route }) => {
  const { shouldFocus } = useLocalSearchParams();
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  // make debounce so not on every time query change it will fetch data when we stop writing it calls after 5 sec
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["movies", debounceQuery],
    queryFn: ({ queryKey }) =>
      queryKey[1] ? fetchMovies(queryKey[1]) : fetchMovies(),
  });

  useEffect(() => {
    let funCall = setTimeout(() => {
      setDebounceQuery(query.trim());
    }, 500);
    return () => clearTimeout(funCall);
  }, [query]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList
        data={data?.results}
        numColumns={3}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        className="px-5"
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        ListEmptyComponent={
          !isLoading && !isError ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {query.trim() ? "No Movies Found" : "Search For a movie"}
              </Text>
            </View>
          ) : null
        }
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                value={query}
                onChangeText={setQuery}
                placeHolder={"Search"}
                shouldFocus={shouldFocus == "true"}
              />
            </View>
            {isLoading && (
              <ActivityIndicator
                className="my-3"
                size="large"
                color="#0000ff"
              />
            )}
            {isError && (
              <Text className="text-red-500 px-5 my-3">
                Error : {error?.message}
              </Text>
            )}

            {!isLoading &&
              !isError &&
              query?.trim() &&
              data.results?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-accent">{query.trimStart()}</Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default Search;
