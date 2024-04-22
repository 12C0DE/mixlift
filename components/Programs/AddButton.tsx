import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const AddButton = ({ mainAction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={mainAction}>
        <Ionicons name="add-circle-outline" size={50} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});
