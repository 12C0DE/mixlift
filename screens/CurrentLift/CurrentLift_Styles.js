import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxes: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#D9D9D9",
    padding: 16,
    marginHorizontal: 10,
    width: 70,
    textAlign: "center",
  },
  boxOf: {},
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  quitBtn: {
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: "#9E9B59F0",
    backgroundColor: "#434341F0",
    padding: 16,
  },
  liftText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24,
  },
  navBtn: {
    fontWeight: "bold",
    fontSize: 18,
  },
  navButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  navBtnView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  repsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sets: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "3%",
  },
  setsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subText: {
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "600",
    color: "gray",
    marginTop: -10,
    marginBottom: 2,
  },
  swipeRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  timerBtn: {
    color: "#555555",
    fontWeight: "500",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 5,
    backgroundColor: "black",
    color: "white",
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    paddingVertical: "3%",
  },
  touchableNavBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  weightsRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
