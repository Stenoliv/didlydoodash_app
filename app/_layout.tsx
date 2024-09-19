import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="/home"
      screenOptions={{ headerShown: false, animation: "none" }}
    >
      <Stack.Screen name="(main)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
