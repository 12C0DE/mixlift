import React from "react";
import { Modal, Text, View, Button } from "react-native";

export const ProgramsModal = ({ savedWO, startWorkout, editWO }) => {
  const [modalVisible, setModalVisible] = React.useState(savedWO);

  const closeModal = () => {
    setModalVisible(false);
    editWO();
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Workout has been saved</Text>
        <Button title="Start Workout" onPress={startWorkout} />
        <Button title="Edit Workout" onPress={closeModal} />
      </View>
    </Modal>
  );
};
