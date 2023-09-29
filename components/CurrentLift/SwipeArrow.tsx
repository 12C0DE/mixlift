import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const SwipeArrow = ({ name }) => {
  return (
    <MaterialIcons
      name={name}
      size={42}
      color="#CACACAF0"
      style={{ marginHorizontal: 40 }}
    />
  );
};
