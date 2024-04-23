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
    padding: 4,
  },
  gridItem: {
    width: "60%",
    margin: 1,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 4,
  },
  gridNumItem: {
    width: "15%",
    // margin: 5,
    padding: 8,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
