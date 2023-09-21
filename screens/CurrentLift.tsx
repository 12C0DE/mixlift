import React, { useState } from "react";
import { View } from "../components/Themed";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { RootTabScreenProps } from "../types";
import { WeightIcons } from "../components/WeightIcons";
import { BarbellButton } from "../components/CurrentLift/BarbellButtons";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

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
  const [reps, setReps] = useState<number>(0);

  const weightHandler = (value: number) => {
    if (value >= 0 && value <= 999) {
      setWeight(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{weightData?.name ?? "Bench Press"}</Text>
      <View style={styles.container}>
        <WeightIcons weight={weight} settingWeight={weightHandler} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.subText}>
            Last time you hit {weightData?.lastLiftAmount ?? 220}
          </Text>
        </View>
      </View>
      <View style={styles.swipeRow}>
        <MaterialIcons
          name="keyboard-arrow-up"
          size={42}
          color="gray"
          style={{ marginHorizontal: 40 }}
        />
        <MaterialIcons
          name="keyboard-arrow-up"
          size={42}
          color="gray"
          style={{ marginHorizontal: 40 }}
        />
        <MaterialIcons
          name="keyboard-arrow-up"
          size={42}
          color="gray"
          style={{ marginHorizontal: 40 }}
        />
      </View>
      <View style={styles.weightsRow}>
        <BarbellButton
          weight={weight}
          weightAmount={5}
          weightHandler={weightHandler}
        />
        <BarbellButton
          weight={weight}
          weightAmount={25}
          weightHandler={weightHandler}
        />
        <BarbellButton
          weight={weight}
          weightAmount={45}
          weightHandler={weightHandler}
        />
        <BarbellButton
          weight={weight}
          weightAmount={35}
          weightHandler={weightHandler}
        />
        <BarbellButton
          weight={weight}
          weightAmount={10}
          weightHandler={weightHandler}
        />
      </View>
      <View style={styles.swipeRow}>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={42}
          color="gray"
          style={{ marginHorizontal: 40 }}
        />
        <MaterialIcons
          name="keyboard-arrow-down"
          size={42}
          color="gray"
          style={{ marginHorizontal: 40 }}
        />
        <MaterialIcons
          name="keyboard-arrow-down"
          size={42}
          color="gray"
          style={{ marginHorizontal: 40 }}
        />
      </View>
      <View style={styles.sets}>
        <Text style={styles.liftText}>SETS</Text>
        <View style={styles.setsContainer}>
          <Text style={styles.boxes}>2</Text>
          <Text style={{ fontWeight: "bold" }}>OF</Text>
          <Text style={styles.boxes}>4</Text>
        </View>
      </View>
      <View style={styles.sets}>
        <Text style={styles.liftText}>REPS</Text>
        <View style={styles.repsContainer}>
          <Button
            icon={<FontAwesome5 name="minus" size={24} color="black" />}
            onPress={() => reps > 0 && setReps(reps - 1)}
            disabled={reps < 1}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.boxes}
            maxLength={2}
            onChangeText={(val) => setReps(+val)}
          >
            {reps}
          </TextInput>
          <Button
            icon={<FontAwesome5 name="plus" size={24} color="black" />}
            onPress={() => reps < 99 && setReps(reps + 1)}
            disabled={reps > 98}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxes: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#D9D9D9",
    padding: 12,
    marginHorizontal: 10,
  },
  boxOf: {},
  container: {
    // flex: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  liftText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 6,
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
    marginBottom: 25,
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
  swipeRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "30px",
  },
  weightsRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
});
