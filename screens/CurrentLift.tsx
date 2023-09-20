import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { RootTabScreenProps } from "../types";
import { WeightIcons } from "../components/WeightIcons";
import { Entypo } from "@expo/vector-icons";

interface WeightDataProps {
  name: string;
  lastLiftAmount: number;
  sets: number;
  reps: number;
}

export const CurrentLift = ({
  navigation,
}: RootTabScreenProps<"CurrentLift">) => {
  const [weight, setWeight] = useState<number>(225);
  const [weightData, setWeightData] = useState<WeightDataProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{weightData?.name ?? "Bench Press"}</Text>
      <View style={styles.container}>
        <WeightIcons weight={0} />
      </View>
      {/* <View style={styles.barbell}> */}
      {/* <Text style={styles.barbellText}>45</Text> */}
      <Pressable style={styles.barbell} onPress={() => console.log("pressed")}>
        <Text style={styles.barbellText}>45</Text>
      </Pressable>
      {/* </View> */}
      <View>
        <Text style={styles.subText}>
          Last lift was {weightData?.lastLiftAmount}
        </Text>
      </View>
      <View>
        <Text>{weightData?.reps ?? 10} REPS</Text>
        <Text>{weightData?.sets ?? 3} SETS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barbell: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 6,
  },
  barbellText: {
    textAlign: "center",
    backgroundColor: "none",
    fontSize: 42,
  },
  container: {
    // flex: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 30,
  },
  subText: {
    fontSize: 12,
    fontStyle: "italic",
    textDecorationLine: "underline",
    textUnderlineOffset: "2px",
  },
});
