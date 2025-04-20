import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { IMAGE_BASE_URL } from "@/service/apiConfig";
import { icons } from "@/constants/icons";

const MovieCard = ({ id, poster_path, title, vote_average, release_date }) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      {/* <Text className="text-white text-sm">MovieCard</Text> */}
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? IMAGE_BASE_URL + poster_path
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text
          numberOfLines={1}
          className="text-base font-bold text-white capitalize"
        >
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <Text className="text-xs text-light-300 font-medium mt-1">
          {release_date?.split("-")[0]}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
