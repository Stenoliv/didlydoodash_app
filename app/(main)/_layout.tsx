import { Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
