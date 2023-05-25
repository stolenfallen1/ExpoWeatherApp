import React from "react";
import { Text, View } from "react-native";

const MoreInfo = () => {
  return (
    <>
      <View className="flex flex-row justify-center items-center mb-40">
        <View className="mx-5 flex items-center">
          <Text className="text-2xl font-bold">65 &#8457;</Text>
          <Text className="text-xl">Feels Like</Text>
        </View>
        <View className="mx-5 flex items-center">
          <Text className="text-2xl font-bold">40 MPH</Text>
          <Text className="text-xl">Wind</Text>
        </View>
        <View className="mx-5 flex items-center">
          <Text className="text-2xl font-bold">30 %</Text>
          <Text className="text-xl">Humidity</Text>
        </View>
      </View>
    </>
  );
};

export default MoreInfo;
