import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
``;
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: 120,
    height: 120,
    margin: 8, // Add a gap of 8 units between components
    justifyContent: "center",
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default ProgramTile;
