import React from "react";
import { Text, View } from "../../Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./DidntLift_Styles";

export const DidntLift = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Didn't lift...</Text>
      <MaterialCommunityIcons name="emoticon-frown" size={60} color="black" />
    </View>
  );
};
