/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";
import { CreateProgram } from "../screens";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Programs: {
            screens: {
              Programs: "Programs",
              // CreateProgram: "CreateProgram",
            },
          },
          History: {
            screens: {
              History: "History",
            },
          },
          CurrentLift: {
            screens: {
              CurrentLift: "CurrentLift",
            },
          },
        },
      },
      Modal: "modal",
      // NotFound: "*",
    },
  },
};

export default linking;
