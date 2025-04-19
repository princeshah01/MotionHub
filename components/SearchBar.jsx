import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { icons } from "@/constants/icons";

const SearchBar = ({ placeHolder, onPress }) => {
  return (
    <View
      className="flex-row items-center bg-dark-200 rounded-full px-5 py-4"
      //   style={{ backgroundColor: "#0F0D23" }}
    >
      <Image
        source={icons.search}
        className="size-7"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeHolder}
        // value=""
        // onPress={onPress}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2"
        style={{ color: "white", fontSize: 16 }}
      />
    </View>
  );
};

export default SearchBar;
