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
import { getPrograms } from "../../db/database";
import { styles } from "./Programs_Styles";
import * as FileSystem from "expo-file-system";

export type ProgramType = {
  id: string;
  name: string;
};

// Function to fetch programs from the server
const fetchPrograms = async () => {
  // Implement your logic to fetch programs from the server
  return new Promise((resolve, reject) => {
    getPrograms()
      .then((data) => resolve(data as ProgramType[]))
      .catch((error) => reject(error));
    // .finally(() => resolve([]));
  });
};

export const Programs = ({ navigation }) => {
  // const [programsList, setProgramsList] = useState(programs);
  const [programsList, setProgramsList] = useState<ProgramType[]>([]);

  useEffect(() => {
    // Fetch programs from the server when the component mounts
    fetchPrograms().then((data) => setProgramsList(data as ProgramType[]));
    // .then((d) => console.log(d));
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
      {/* {programsList && programsList.length < 1 ? (
        <View style={styles.programContainer}>
          <ProgramTile text="Create Program" icon="create" />
        </View>
      ) : ( */}
      <View style={styles.programContainer}>
        {/* <Text>{FileSystem.documentDirectory}</Text> */}
        {programsList.length > 0 && (
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
        )}
        <AddButton mainAction={createProgram} />
      </View>
      {/* // </ScrollView> */}
      {/* // )} */}
      {/* <View style={styles.gradientArea} /> */}
    </View>
  );
};
