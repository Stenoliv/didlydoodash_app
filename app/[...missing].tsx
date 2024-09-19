import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function MissingPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MissingPage</Text>
      <Link push href="/home" asChild>
        <TouchableOpacity>
          <Text>Return to main</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
