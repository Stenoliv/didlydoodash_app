import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link push href={"/home"} asChild>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link push href={"/register"} asChild>
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
