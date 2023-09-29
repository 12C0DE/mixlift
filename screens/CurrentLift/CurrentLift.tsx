import React, { useState } from "react";
import { View } from "../../components/Themed";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { RootTabScreenProps } from "../../types";
import { WeightIcons } from "../../components/WeightIcons";
import { BarbellButton } from "../../components/CurrentLift/BarbellButtons";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./CurrentLift_Styles";
import { LiftType, SetType } from "../../types/LiftType";
import { SwipeArrow } from "../../components/CurrentLift/SwipeArrow";

interface WeightDataProps {
  name: string;
  lastLiftAmount: number;
  sets: number;
  reps: number;
}

type SetsType = {
  totalSets: number;
  currentSet: number;
};

export const CurrentLift = ({
  navigation,
}: RootTabScreenProps<"CurrentLift">) => {
  const [weight, setWeight] = useState<number>(225);
  const [weightData, setWeightData] = useState<WeightDataProps>();
  const [reps, setReps] = useState<number>(0);
  const [sets, setSets] = useState<SetsType>({ totalSets: 4, currentSet: 1 });
  const [lift, setLift] = useState<LiftType>({
    name: "",
    date: new Date(),
    sets: 0,
  });

  const weightHandler = (value: number) => {
    if (value >= 0 && value <= 999) {
      setWeight(value);
    }
  };

  const setsHandler = (isNext: boolean) => {
    updateLift();
    setSets({
      ...sets,
      currentSet: isNext ? sets.currentSet + 1 : sets.currentSet - 1,
    });
    refillOldSets(isNext ? sets.currentSet + 1 : sets.currentSet - 1);
  };

  const refillOldSets = (currSet: number) => {
    //fill UI with previous data
    if (lift?.sets && lift.sets.length >= currSet) {
      setWeight(lift.sets[currSet - 1].weight);
      setReps(lift.sets[currSet - 1].reps);
    }
  };

  const updateLift = () => {
    //* check length of the current lift's sets
    if (lift.sets === 0) {
      // * add the current lift at index 1 (no lifts currently exist)
      const currLift: LiftType = {
        name: weightData?.name ?? "Bench Press",
        date: new Date(),
        sets: [{ reps: reps, weight: weight } as SetType],
      };

      setLift(currLift);
    } else {
      //* check if set.currentSet is available in lift, if so, edit it, otherwise, add it

      //go back to previous set and update UI to show the other weight & rep amount. also update if changed
      if (lift?.sets && lift?.sets.length >= sets.currentSet) {
        //update this set
        const updateSets = lift.sets;
        updateSets[sets.currentSet - 1].reps = reps;
        updateSets[sets.currentSet - 1].weight = weight;

        setLift({ ...lift, sets: updateSets });
      } else {
        // current set doesnt exist, add new set to lift

        const newSet: SetType = {
          reps: reps,
          weight: weight,
        };

        const liftSets: SetType[] | 0 = lift?.sets ?? 0;

        liftSets && liftSets.push(newSet);

        lift && setLift({ ...lift, sets: liftSets });
      }

      if (sets.totalSets === sets.currentSet) {
        //todo handle moving to the next LIFT
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* //TODO: maybe make the title swipeable to get to the other workouts so this would make the prev & next buttons only used on changing sets */}

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
          <SwipeArrow name="keyboard-arrow-up" />
          <SwipeArrow name="keyboard-arrow-up" />
          <SwipeArrow name="keyboard-arrow-up" />
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
          <SwipeArrow name="keyboard-arrow-down" />
          <SwipeArrow name="keyboard-arrow-down" />
          <SwipeArrow name="keyboard-arrow-down" />
        </View>
        <View style={styles.sets}>
          <Text style={styles.liftText}>SETS</Text>
          <View style={styles.setsContainer}>
            <Text style={styles.boxes}>{sets.currentSet}</Text>
            <Text style={{ fontWeight: "bold" }}>OF</Text>
            <Text style={styles.boxes}>{sets?.totalSets}</Text>
          </View>
        </View>
        <View style={styles.sets}>
          <Text style={styles.liftText}>REPS</Text>
          <View style={styles.repsContainer}>
            <Button
              icon={<FontAwesome5 name="minus" size={24} color="black" />}
              onPress={() => reps > 0 && setReps(reps - 1)}
              disabled={reps < 1}
              type="clear"
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
              type="clear"
            />
          </View>
        </View>
      </View>
      <View style={styles.navButtonsContainer}>
        <View style={styles.navBtnView}>
          <TouchableOpacity
            style={styles.touchableNavBtn}
            onPress={() => setsHandler(false)}
            disabled={sets.currentSet === 1}
          >
            <MaterialIcons
              style={{ transform: [{ rotateY: "180deg" }] }}
              name="navigate-next"
              size={48}
              color="black"
            />
            <Text style={{ fontWeight: "bold", marginLeft: -16, fontSize: 18 }}>
              Prev
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navBtnView}>
          <TouchableOpacity
            style={styles.touchableNavBtn}
            onPress={() => setsHandler(true)}
            disabled={sets.currentSet >= sets.totalSets}
          >
            <Text
              style={{ fontWeight: "bold", marginRight: -16, fontSize: 18 }}
            >
              Next
            </Text>
            <MaterialIcons
              name="navigate-next"
              size={48}
              color="black"
              title="next"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.quitBtn}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Quit Workout?
        </Text>
      </TouchableOpacity>
    </>
  );
};
