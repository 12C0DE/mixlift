import React from "react";
import { Text, View } from "../../Themed";
import { styles } from "./WorkoutItem_Styles";
import uuid from "react-uuid";
import { Divider } from "react-native-paper";

//todo this might need to be a flat list
export const WorkoutItem = ({ title, lift }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "600" }}>{lift.name}</Text>
        <View style={styles.liftContainer}>
          {lift?.sets?.map((item, index) => {
            return (
              <View key={uuid()} style={{ marginVertical: 10, width: "100%" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 6,
                  }}
                >
                  <Text>{index + 1}.</Text>
                  <Text>Reps:</Text>
                  <Text style={{ fontWeight: "600" }}>{item.reps}</Text>
                  <Text>Weight:</Text>
                  <Text style={{ fontWeight: "700" }}>{item.weight}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}></View>
              </View>
            );
          })}
        </View>
        <Divider style={{ marginVertical: 12 }} />
      </View>
    </View>
  );
};
