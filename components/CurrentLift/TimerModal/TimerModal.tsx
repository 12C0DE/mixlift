import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../Themed";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./TimerModal_Styles";
import { FontAwesome } from "@expo/vector-icons";

enum TimerStatus {
  STOPPED = -1,
  PAUSED = 0,
  PLAYING = 1,
}

export const TimerModal = () => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [timerStatus, setTimerStatus] = useState<TimerStatus>(
    TimerStatus.STOPPED
  );
  const [timesUp, setTimesUp] = useState<boolean>(false);
  const minToMs = 60000;
  const secToMs = 1000;

  const startTimer = () => {
    setTimerStatus(TimerStatus.PLAYING);
  };

  const pauseTimer = () => {
    console.log("in pauseTimer");
    setTimerStatus(
      timerStatus === TimerStatus.PAUSED
        ? TimerStatus.PLAYING
        : TimerStatus.PAUSED
    );
  };

  const stopTimer = () => {
    setTimerStatus(TimerStatus.STOPPED);
  };

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
    stopTimer();
    setTimesUp(false);
    setTime(0);
  };

  useEffect(() => {
    setTimesUp(false);
  }, []);

  useEffect(() => {
    let timerID;

    if (timerStatus === TimerStatus.PLAYING) {
      setTimesUp(false);
      const currTime = time ? time : minutes * minToMs + seconds * secToMs;
      setTime(currTime);

      timerID = setInterval(() => {
        setTime((time) => time - secToMs);
      }, secToMs);
    } else {
      clearInterval(timerID);

      if (timerStatus === TimerStatus.STOPPED) {
        console.log("time stopped");
        setTimesUp(true);
      }
    }

    return () => {
      clearInterval(timerID);
    };
  }, [timerStatus]);

  useEffect(() => {
    if (time === 0) {
      stopTimer();
      setTimesUp(true);
    }
  }, [time]);

  const transformMins = () => {
    return Math.floor((time / minToMs) % 60);
  };

  const transformSecs = () => {
    const convertedValue = Math.floor((time / secToMs) % 60);
    return convertedValue < 10 ? `0${convertedValue}` : convertedValue;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timersContainer}>
        <View style={styles.timerContainer}>
          <Picker
            style={styles.timerSelect}
            selectedValue={minutes}
            onValueChange={setMinutes}
          >
            {Array.from(Array(21).keys()).map((item, index) => (
              <Picker.Item
                key={`min_${index}`}
                label={`${item}`}
                value={item}
              />
            ))}
          </Picker>
          <Text>Minutes</Text>
        </View>
        <View style={styles.timerContainer}>
          <Picker
            style={styles.timerSelect}
            selectedValue={seconds}
            onValueChange={setSeconds}
          >
            {Array.from(Array(60).keys()).map((item, index) => (
              <Picker.Item
                key={`sec_${index}`}
                label={`${item}`}
                value={item}
              />
            ))}
          </Picker>
          <Text>Seconds</Text>
        </View>
      </View>
      <View style={{ height: 100 }}>
        <Text style={styles.timerCountDown}>
          {transformMins()}:{transformSecs()}
        </Text>
      </View>
      <View style={styles.btnsContainer}>
        <View>
          <TouchableOpacity onPress={reset}>
            <FontAwesome
              name="circle-thin"
              size={125}
              color="black"
              style={styles.btn}
            />
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View>
          {timerStatus !== TimerStatus.PLAYING ? (
            <TouchableOpacity
              disabled={seconds === 0 && minutes === 0}
              onPress={
                timerStatus === TimerStatus.STOPPED ? startTimer : pauseTimer
              }
            >
              <FontAwesome
                name="circle-thin"
                size={120}
                color="black"
                style={styles.btn}
              />
              <Text style={styles.btnText}>Start</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled={seconds === 0 && minutes === 0}
              onPress={pauseTimer}
            >
              <FontAwesome
                name="circle-thin"
                size={120}
                color="black"
                style={styles.btn}
              />
              <Text style={styles.btnText}>Pause</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{ height: 160 }}>
        {timesUp === true ? (
          <Text style={styles.timesUpBtn}>TIMES UP!</Text>
        ) : null}
      </View>
    </View>
  );
};
