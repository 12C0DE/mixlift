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
    bottom: 36,
    right: 16,
    zIndex: 20,
    backgroundColor: "white",
    padding: 1,
    paddingLeft: 4,
    borderRadius: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
