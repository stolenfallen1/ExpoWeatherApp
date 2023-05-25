import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import MoreInfo from "./components/MoreInfo";

export default function App() {
  const apiKey = "6f8effcef36b38afb38fc70bbfd51996";
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  return (
    <View className="flex flex-1 items-center mt-40">
      <Header />
      <WeatherInfo />
      <MoreInfo />
      <StatusBar style="auto" />
    </View>
  );
}
