import React, { useCallback, useState } from "react";
import { Text } from "react-native";
import { Agenda, DateData } from "react-native-calendars";
import { View } from "../../components/Themed";
import { lift } from "../../mocks/lift";
import { DidntLift } from "../../components/History/DidntLift/DidntLift";
import { MarkedDates } from "react-native-calendars/src/types";
import { WorkoutItem } from "../../components/History/WorkoutItem/WorkoutItem";
import { styles } from "./History_Styles";

const timeToString = (time) => {
  const date = new Date(time);

  return date.toISOString().split("T")[0];
};

export const History = () => {
  const [items, setItems] = useState({});

  const loadItems = (day: DateData) => {
    //retrieve items for the selected day
    const dayItems = lift.workoutLifts.filter(
      (dateSel) => dateSel.date === day.dateString
    );

    const keyItems = {};

    dayItems.map((itm) => {
      const strTime = itm.date;

      if (!keyItems[strTime]) keyItems[strTime] = [];

      keyItems[strTime].push({
        name: itm.name,
        sets: itm?.sets,
      });
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
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{lift.title}</Text>
          <Text>{item.name}</Text>
          {item?.t1?.map((it) => {
            return (
              <React.Fragment key={uuid()}>
                <Text>{it.reps}</Text>
                <Text>{it.weight}</Text>
              </React.Fragment>
            );
          })}
        </View> */}
        <WorkoutItem title={lift.title} lift={item} />
      </View>
    );
  }, []);

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "auto",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Agenda
        items={items}
        renderItem={renderItem}
        pastScrollRange={20}
        futureScrollRange={2}
        renderEmptyData={() => <DidntLift />}
        style={{ backgroundColor: "#fff" }}
        renderDay={() => {
          return <View />;
        }}
        showOnlySelectedDayItems={true}
        loadItemsForMonth={loadItems}

        // markedDates={{ "2023-10-04": { marked: true } }}
      />
      {lift?.title ? <Text style={styles.title}>{lift.title}</Text> : null}
    </View>
  );
};
