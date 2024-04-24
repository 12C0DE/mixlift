import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./ProgramTile_Styles";
interface ProgramTileProps {
  text: string;
  icon: string;
}

export const ProgramTile: React.FC<ProgramTileProps> = ({ text, icon }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} type="material" size={24} color="#fff" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
