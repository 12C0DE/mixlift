import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Programs, CreateProgram } from "../screens/index";
import { ProgramsModal } from "../components";

const ProgramsStack = createStackNavigator();

export const ProgramsStackScreen = () => {
  return (
    <ProgramsStack.Navigator>
      <ProgramsStack.Screen
        name="Programs"
        component={Programs}
        options={{ headerShown: false }}
      />
      <ProgramsStack.Screen
        name="CreateProgram"
        navigationKey="Programs"
        component={CreateProgram}
        options={{ headerShown: false }}
      />
      {/* <ProgramsStack.Screen
        name="ProgramsModal"
        navigationKey="Programs"
        component={<ProgramsModal savedWO={false} startWorkout={}/>}
        options={{ headerShown: false }}
      /> */}
    </ProgramsStack.Navigator>
  );
};
