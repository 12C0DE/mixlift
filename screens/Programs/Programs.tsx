import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { programs } from "../../mocks/index";
import { AddButton, ProgramTile } from "../../components";
import { styles } from "./Programs_Styles";

// Function to fetch programs from the server
const fetchPrograms = async () => {
  // Implement your logic to fetch programs from the server
};

export const Programs = ({ navigation }) => {
  // export const Programs = ({ navigation }: RootTabScreenProps<"Programs">) => {
  const [programsList, setProgramsList] = useState(programs);

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
    <View>
      {programsList.length < 1 ? (
        <ProgramTile text="Create Program" icon="create" />
      ) : (
        <View style={styles.programContainer}>
          <FlatList
            data={programsList}
            keyExtractor={(item) => item.id.toString()}
            // horizontal={true}
            contentContainerStyle={styles.programContainer}
            numColumns={2}
            renderItem={({ item }) => (
              <ProgramTile text={item.name} icon="fitness-center" />
            )}
          />
          <AddButton mainAction={createProgram} />
        </View>
        // </ScrollView>
      )}
      <View style={styles.gradientArea} />
    </View>
  );
};
