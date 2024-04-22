import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TextInput } from "react-native";
import uuid from "react-native-uuid";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { workoutProgram } from "../../mocks";
import { WorkoutType } from "../../types/index";
import { Swipeable } from "react-native-gesture-handler";
import { styles } from "./CreateProgram_Styles";

export const CreateProgram = () => {
  const [programName, setProgramName] = useState("");
  // const [program, setProgram] = useState<Workout>({} as Workout);
  const [workouts, setWorkouts] = useState<WorkoutType[]>(workoutProgram);

  const addWorkout = () => {
    const newWorkout: WorkoutType = {
      name: "",
      id: uuid.v4().toString(),
      sets: 0,
      reps: 0,
    };
    setWorkouts([...workouts, newWorkout]);
  };

  const deleteWorkout = (id: string) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
  };

  const rightSwipe = (progress, dragX) => {
    const swipeThreshold = 60; // Set your own value

    const scale = dragX.interpolate({
      inputRange: [-swipeThreshold, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.deleteContainer}>
        <MaterialCommunityIcons name="trash-can" size={32} color="red" />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        placeholder="Program Name"
        value={programName}
        onChangeText={setProgramName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <View
        style={{ flex: 1, width: "100%", borderWidth: 1, borderColor: "#ccc" }}
      >
        <FlatList
          data={workouts}
          keyExtractor={(item: WorkoutType) => item.id.toString()}
          renderItem={({ item }) => (
            <Swipeable
              dragOffsetFromRightEdge={80}
              onSwipeableOpen={() => {
                deleteWorkout(item.id);
              }}
              // dragOffsetFromLeftEdge={90}
              renderRightActions={(progress, dragX) =>
                rightSwipe(progress, dragX)
              }
            >
              <View style={styles.gridContainer}>
                {/* <Text style={{ flex: 1 }}>Workout {item.id}</Text> */}
                <TextInput
                  placeholder="Workout Name"
                  value={item.name}
                  onChangeText={(text) => {
                    const updatedWorkouts = workouts.map((workout) => {
                      if (workout.id === item.id) {
                        return { ...workout, name: text };
                      }
                      return workout;
                    });
                    setWorkouts(updatedWorkouts);
                  }}
                  style={styles.gridItem}
                />
                <TextInput
                  placeholder="Sets"
                  value={item.sets.toString()}
                  keyboardType="numeric"
                  maxLength={3}
                  onChangeText={(text) => {
                    const updatedWorkouts = workouts.map((workout) => {
                      if (workout.id === item.id) {
                        return { ...workout, sets: parseInt(text) };
                      }
                      return workout;
                    });
                    setWorkouts(updatedWorkouts);
                  }}
                  style={styles.gridNumItem}
                />
                <TextInput
                  placeholder="Reps"
                  value={item.reps.toString()}
                  keyboardType="numeric"
                  maxLength={3}
                  onChangeText={(text) => {
                    const updatedWorkouts = workouts.map((workout) => {
                      if (workout.id === item.id) {
                        return { ...workout, reps: parseInt(text) };
                      }
                      return workout;
                    });
                    setWorkouts(updatedWorkouts);
                  }}
                  style={styles.gridNumItem}
                />
              </View>
            </Swipeable>
          )}
        />
        <MaterialCommunityIcons name="minus-thick" size={24} color="black" />
      </View>
      {/* ...existing code... */}
      <Button title="Save" onPress={addWorkout} />
    </View>
  );
};
