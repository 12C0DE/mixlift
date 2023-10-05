import React from "react";
import { Text, View } from "../../Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./DidntLift_Styles";

export const DidntLift = () => {
  return (
    <View style={styles.container}>
      <Text>Didnt lift</Text>
      <MaterialCommunityIcons name="emoticon-frown" size={24} color="black" />
    </View>
  );
};
