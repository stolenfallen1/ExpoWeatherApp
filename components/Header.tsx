import React from "react";
import { Text, TextInput, View } from "react-native";

interface HeaderProps {
  location: string;
  setLocation: (location: string) => void;
  getLocation: (event: any) => void;
}

const Header = ({ location, setLocation, getLocation }: HeaderProps) => {
  return (
    <View className="flex items-center">
      <Text className="font-bold text-4xl tracking-tighter mb-3">
        Weather App
      </Text>
      <TextInput
        value={location}
        onChange={(event) => setLocation(event.nativeEvent.text)}
        onEndEditing={getLocation}
        style={{ width: 200 }}
        className="text-center text-xl border-b"
        placeholder="Search here..."
      />
    </View>
  );
};

export default Header;
