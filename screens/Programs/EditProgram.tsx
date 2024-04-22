import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TextInput } from "react-native";
import { workoutProgram } from "../../mocks";

export type Workout = {
  name: string;
  id: string;
  sets: number;
  reps: number;
};
export const EditProgram = () => {
  const [programName, setProgramName] = useState("");
  const [workouts, setWorkouts] = useState(workoutProgram);

  const addWorkout = () => {
    // setWorkouts([...workouts, { id: workouts.length + 1 }]);
    // setWorkouts([...workouts, { id: `${workouts.length + 1}` }]);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Edit Program</Text>
      <TextInput
        placeholder="Program Name"
        value={programName}
        onChangeText={setProgramName}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: "80%" }}
      />
      <Button title="Submit Changes" onPress={addWorkout} />
      {/* <FlatList
        data={workouts}
        keyExtractor={(item: Workout) => item.id.toString()}
        renderItem={({ item: Workout }) => (
          <View style={{ borderWidth: 1, padding: 10, margin: 10 }}>
            <Text>Workout {item.id}</Text>
          </View>
        )}
      /> */}
    </View>
  );
};
