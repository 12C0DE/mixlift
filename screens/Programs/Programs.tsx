import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { RootTabScreenProps } from "../../types";
import { AddButton, ProgramTile } from "../../components";
import { styles } from "./Programs_Styles";

// Function to fetch programs from the server
const fetchPrograms = async () => {
  // Implement your logic to fetch programs from the server
};

export const Programs = ({ navigation }) => {
  // export const Programs = ({ navigation }: RootTabScreenProps<"Programs">) => {
  const [programs, setPrograms] = useState([
    { id: 1, name: "Program 1" },
    { id: 2, name: "Program 2" },
    { id: 3, name: "Program 3" },
  ]);

  useEffect(() => {
    // Fetch programs from the server when the component mounts
    // fetchPrograms().then((data) => setPrograms(data));
  }, []);

  const createProgram = () => {
    // Implement your logic to create a new program
    navigation.navigate("CreateProgram");
  };

  const editProgram = (programId) => {
    // Implement your logic to edit a program with the given programId
  };

  return (
    <View key={Math.random()} style={{ flex: 1, alignItems: "center" }}>
      {/* <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Programs</Text>
    </View> */}
      {/* <FlatList
                data={programs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View>
                  <Text>{item.name}</Text>
                  <Button title="Edit" onPress={() => editProgram(item.id)} />
                  </View>
                )}
              /> */}

      {programs.length < 1 ? (
        <ProgramTile text="Create Program" icon="create" />
      ) : (
        <>
          <View style={styles.programContainer}>
            <ProgramTile
              text="Chest and triceps part 2"
              icon="fitness-center"
            />
            <ProgramTile text="Chest" icon="fitness-center" />
            <ProgramTile text="Legs" icon="fitness-center" />
          </View>
          <AddButton mainAction={createProgram} />
        </>
      )}
    </View>
  );
};
