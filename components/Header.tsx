import React from "react";
import { Text, TextInput, View } from "react-native";

const Header = () => {
  return (
    <View className="flex items-center">
      <Text className="font-bold text-4xl tracking-tighter mb-3">
        Weather App
      </Text>
      <TextInput
        style={{ width: 200 }}
        className="text-center text-xl border-b"
        placeholder="Search here..."
      />
    </View>
  );
};

export default Header;
