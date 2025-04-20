import { TextInput, View } from "react-native";
import React, { useCallback, useRef } from "react";
import { Image } from "react-native";
import { useFocusEffect } from "expo-router";
import { icons } from "@/constants/icons";

const SearchBar = ({
  placeHolder,
  onPress,
  value,
  onChangeText,
  shouldFocus,
}) => {
  let inputRef = useRef();
  useFocusEffect(
    useCallback(() => {
      if (shouldFocus && inputRef.current) {
        const timeout = setTimeout(() => {
          inputRef.current.focus();
        }, 100);

        return () => clearTimeout(timeout);
      }
    }, [shouldFocus])
  );
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-1">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        ref={inputRef}
        placeholder={placeHolder}
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 text-base ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
