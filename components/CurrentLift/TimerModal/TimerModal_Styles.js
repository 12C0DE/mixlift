import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btn1: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    border: "1px solid black",
    padding: 10,
    textAlign: "center",
  },
  btn: {
    width: 120,
    height: 120,
  },
  btnText: {
    position: "absolute",
    zIndex: 2,
    width: 120,
    lineHeight: 120,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    paddingRight: 12,
  },

  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "relative",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  timersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  timerSelect: {
    width: 100,
  },
  timerCountDown: {
    fontSize: 90,
    textAlign: "center",
    marginTop: -20,
  },
  timesUpBtn: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 60,
  },
});
