import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Programs, CreateProgram } from "../screens/index";

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
        component={CreateProgram}
        options={{ headerShown: false }}
      />
    </ProgramsStack.Navigator>
  );
};
