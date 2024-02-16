import React from "react";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet } from "react-native";
import { Programs } from "./Programs/Programs";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Programs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
