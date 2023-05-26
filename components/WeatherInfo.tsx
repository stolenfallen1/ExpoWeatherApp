import React from "react";
import { Text, View } from "react-native";
import { WeatherData } from "../App";

interface WeatherInfoProps {
  data: WeatherData | null;
}

const WeatherInfo = ({ data }: WeatherInfoProps) => {
  return (
    <>
      <View className="flex flex-auto justify-center items-center">
        <Text className="text-4xl">{data?.name}</Text>
        <Text className="font-bold text-3xl">
          {data?.main.temp.toFixed()} &#8457;
        </Text>
        <Text className="italic text-2xl underline">
          {data?.weather?.[0]?.main}
        </Text>
      </View>
    </>
  );
};

export default WeatherInfo;
