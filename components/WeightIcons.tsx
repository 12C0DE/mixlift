import React, { useEffect, useState } from "react";
import { View, Text } from "../components/Themed";
import { Image, StyleSheet, TextInput } from "react-native";
import uuid from "react-uuid";
// import weightIco from "../assets/images/weightIco.png";
import SvgUri from "react-native-svg";

const enum WeightLbs {
  _45s = 90,
  _35s = 70,
  _25s = 50,
  _10s = 20,
  _5s = 10,
  _2half = 5,
}

export const WeightIcons = ({ weight }: any) => {
  const [forty5s, setForty5s] = useState<number[]>([]);
  const [thirty5s, setThirty5s] = useState<number[]>([]);
  const [twenty5s, setTwenty5s] = useState<number[]>([]);
  const [tens, setTens] = useState<number[]>([]);
  const [fives, setFives] = useState<number[]>([]);
  const [twoHalf, setTwoHalf] = useState<number[]>([]);
  const [liftWeight, setLiftWeight] = useState<number>(weight);

  useEffect(() => {
    // const timeoutId = setTimeout(() => figureWeight(liftWeight), 200);
    // return () => clearTimeout(timeoutId);
    figureWeight(liftWeight);
  }, [liftWeight]);

  const figureWeight = (lWeight) => {
    let arrWeight: number = 0;
    if (lWeight < 5) {
      return;
    }

    arrWeight = Math.floor(lWeight / WeightLbs._45s);
    setForty5s(new Array(Math.floor(arrWeight)).fill(45));

    // forty5s.map((w) => console.log("testing"));
    let remainder = lWeight % WeightLbs._45s;

    arrWeight = Math.floor(remainder / WeightLbs._35s);
    setThirty5s(new Array(arrWeight).fill(35));

    remainder = remainder % WeightLbs._35s;
    arrWeight = Math.floor(remainder / WeightLbs._25s);
    setTwenty5s(new Array(arrWeight).fill(25));

    remainder = remainder % WeightLbs._25s;
    arrWeight = Math.floor(remainder / WeightLbs._10s);
    setTens(new Array(arrWeight).fill(10));

    remainder = remainder % WeightLbs._10s;
    arrWeight = Math.floor(remainder / WeightLbs._5s);
    setFives(new Array(arrWeight).fill(5));

    // remainder = remainder % WeightLbs._2half;
    // arrWeight = Math.floor(remainder / WeightLbs._2half);
    // setTwoHalf(new Array(arrWeight).fill(2.5));
  };

  const createWeights = (weightAmount: number, index: number) => {
    switch (weightAmount) {
      case 45:
        return (
          <Image
            key={uuid()}
            source={require("../assets/images/weightIco_45.png")}
          />
        );
      case 35:
        return (
          <Image
            key={uuid()}
            source={require("../assets/images/weightIco_35.png")}
          />
        );
      case 25:
        return (
          <Image
            key={uuid()}
            source={require("../assets/images/weightIco_25.png")}
          />
        );
      case 10:
        return (
          <Image
            key={uuid()}
            source={require("../assets/images/weightIco_10.png")}
          />
        );
      case 5:
        // return <Image source={require("../assets/images/weightIco_5.png")} />
        break;
      case 2.5:
        // return <Image source={require("../assets/images/weightIco_45.png")} />
        break;
      default:
        return null;
    }
  };

  return (
    <View style={styles.weightContainer}>
      <View style={styles.weightRow}>
        {forty5s.map((f, index) => index < 7 && createWeights(f, index))}
        {thirty5s.map((f, index) => createWeights(f, index))}
        {twenty5s.map((f, index) => createWeights(f, index))}
        {tens.map((f, index) => createWeights(f, index))}
      </View>
      <View>
        <TextInput
          keyboardType="numeric"
          style={styles.weightInput}
          onChangeText={(wght) => setLiftWeight(+wght)}
          maxLength={3}
        >
          {liftWeight}
        </TextInput>
      </View>
      <View style={styles.weightRowRev}>
        {forty5s.map((f, index) => index < 7 && createWeights(f, index))}
        {thirty5s.map((f, index) => createWeights(f, index))}
        {twenty5s.map((f, index) => createWeights(f, index))}
        {tens.map((f, index) => createWeights(f, index))}
        {liftWeight < 5 && null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
  subText: {
    fontSize: 12,
    fontStyle: "italic",
  },
  weight: {
    // height: 25,
    // width: 7,
    aspectRatio: 135 / 76,
    justifyContent: "center",
    objectFit: "contain",
  },
  weightInput: {
    borderColor: "#06282c",
    borderWidth: 2,
    borderRadius: 5,
    width: 120,
    height: 70,
    fontSize: 50,
    textAlign: "center",
  },
  weightContainer: {
    height: 100,
    flexDirection: "row",
    // width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  weightRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  weightRowRev: {
    flexDirection: "row",
    alignItems: "center",
  },
});
