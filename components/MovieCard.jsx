import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MovieCard = ({ id, poster_path, title, vote_average }) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      {/* <Text className="text-white text-sm">MovieCard</Text> */}
      <TouchableOpacity className="w-[30%]">
        <Image />
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
