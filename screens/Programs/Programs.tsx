import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { ProgramTile } from "../../components/Programs/ProgramTile";

// Function to fetch programs from the server
const fetchPrograms = async () => {
  // Implement your logic to fetch programs from the server
};

export const Programs = () => {
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
  };

  const editProgram = (programId) => {
    // Implement your logic to edit a program with the given programId
  };

  return (
    <View key={Math.random()} style={{ flex: 1, alignItems: "center" }}>
      <Text>Programs</Text>

      <Button title="Create Program" onPress={createProgram} />

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
      {/* <ProgramTile text="Create Program" icon="create" /> */}

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,

          //   justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <ProgramTile text="Chest and triceps part 2" icon="barbell" />
        <ProgramTile text="Chest" icon="barbell" />
        <ProgramTile text="Chest" icon="barbell" />
      </View>
      {/* <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 20 }}>
        <ProgramTile text="Chest and triceps part 2" icon="barbell" />
        <ProgramTile text="Chest" icon="barbell" />
        <ProgramTile text="Chest" icon="barbell" />
      </View> */}
    </View>
  );
};
