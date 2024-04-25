import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#eee",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: 140,
    height: 140,
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
