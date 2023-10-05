import React, { useCallback, useState } from "react";
import { Text } from "react-native";
import { Agenda, DateData } from "react-native-calendars";
import { View } from "../Themed";
import { dayLifts } from "../../mocks/lift";
import { DidntLift } from "./DidntLift/DidntLift";

const timeToString = (time) => {
  const date = new Date(time);

  return date.toISOString().split("T")[0];
};

export const History = () => {
  const [items, setItems] = useState({});

  const loadItems = (day: DateData) => {
    //todo retrieve items for the selected day
    const dayItems = dayLifts.dayLifts.filter(
      (dateSel) => dateSel.date === day.dateString
    );

    const keyItems = {};

    dayItems.map((it) => {
      const strTime = it.date;

      if (!keyItems[strTime]) {
        keyItems[strTime] = [];

        keyItems[strTime].push({
          name: it.name,
          height: Math.max(50, Math.floor(Math.random() * 150)),
        });
      }
    });

    const newItems = {};
    Object.keys(keyItems).forEach((key) => {
      newItems[key] = keyItems[key];
    });

    setItems(newItems);
  };

  const renderItem = useCallback((item) => {
    return (
      <View style={{ marginRight: 10, marginTop: 17 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Agenda
        items={items}
        loadItemsForMonth={(day) => loadItems(day)}
        renderItem={renderItem}
        pastScrollRange={20}
        futureScrollRange={2}
        renderEmptyData={() => <DidntLift />}
        renderDay={() => {
          return <View />;
        }}
      />
    </View>
  );
};
