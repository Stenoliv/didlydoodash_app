import { Text, View } from "react-native";
import React, { Component } from "react";
import { Stack } from "expo-router";

export default class AuthLayout extends Component {
  render() {
    return (
      <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    );
  }
}
