import React from "react";
import { Text, View } from "react-native";
import { WeatherData } from "../App";

interface MoreInfoProps {
  data: WeatherData | null;
}

const MoreInfo = ({ data }: MoreInfoProps) => {
  return (
    <>
      <View className="flex flex-row justify-center items-center mb-40">
        <View className="mx-5 flex items-center">
          <Text className="text-2xl font-bold">
            {data?.main.feels_like.toFixed()} &#8457;
          </Text>
          <Text className="text-xl">Feels Like</Text>
        </View>
        <View className="mx-5 flex items-center">
          {data?.wind ? (
            <Text className="text-2xl font-bold">{data.wind.speed} MPH</Text>
          ) : null}
          <Text className="text-xl">Wind</Text>
        </View>
        <View className="mx-5 flex items-center">
          {data?.main ? (
            <Text className="text-2xl font-bold">{data.main.humidity} %</Text>
          ) : null}
          <Text className="text-xl">Humidity</Text>
        </View>
      </View>
    </>
  );
};

export default MoreInfo;
