import React from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import WorldMap from "../screens/WorldMap";
import Settings from "../screens/Settings";

const FeedStack = createStackNavigator({
  Home: { screen: Feed }
});

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile }
});

const WorldMapStack = createStackNavigator({
  Map: { screen: WorldMap },
  Settings: {screen: Settings}
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: FeedStack },
      Profile: { screen: ProfileStack },
      Map: { screen: WorldMapStack }
    },
 {

      /*     tabBarOptions: {
      Color: "black",
      FontWeight: 'bold',
      activeTintColor: '#edbf1a',
      inactiveTintColor: '#6876f7',
      showLabel: false,  
      style: {
        backgroundColor: '#323ea8',
        height: 60,
        
      }
    }, */
    }
  )
);
