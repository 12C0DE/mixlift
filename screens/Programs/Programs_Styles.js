import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  programContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-between",
    alignContent: "space-around",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    marginBottom: 40,
    // height: 1400,
  },
  gradientArea: {
    width: "100%",
    height: 100,
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage: "linear-gradient(to bottom, #000, #eee)",
  },
});
