import React from "react";
import { View } from "../Themed";
import { Image } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

export const BarbellButton = ({ weight, weightAmount, weightHandler }) => {
  const weightImage = () => {
    switch (weightAmount) {
      case 45:
        return <Image source={require("../../assets/images/45Plate.png")} />;
      case 35:
        return <Image source={require("../../assets/images/35Plate.png")} />;
      case 25:
        return <Image source={require("../../assets/images/25Plate.png")} />;
      case 10:
        return <Image source={require("../../assets/images/10Plate.png")} />;
      case 5:
        return <Image source={require("../../assets/images/5Plate.png")} />;
      default:
        return;
    }
  };

  //   const currentWeight = weightImage();

  return (
    <GestureRecognizer
      onSwipeUp={() => weightHandler(weight + weightAmount)}
      onSwipeDown={() => weightHandler(weight - weightAmount)}
    >
      <View>{weightImage()}</View>
    </GestureRecognizer>
  );
};
