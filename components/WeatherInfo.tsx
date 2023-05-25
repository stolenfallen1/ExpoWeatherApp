import React from "react";
import { Text, View } from "react-native";

const WeatherInfo = () => {
  return (
    <>
      <View className="flex flex-auto justify-center items-center">
        <Text className="text-4xl">Cebu City</Text>
        <Text className="font-bold text-3xl">60 &#8457;</Text>
        <Text className="italic text-2xl underline">Rain</Text>
      </View>
    </>
  );
};

export default WeatherInfo;
