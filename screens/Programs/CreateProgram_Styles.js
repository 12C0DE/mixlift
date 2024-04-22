import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  deleteContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  gridItem: {
    width: "60%",
    margin: 3,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
  },
  gridNumItem: {
    width: "15%",
    margin: 5,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
