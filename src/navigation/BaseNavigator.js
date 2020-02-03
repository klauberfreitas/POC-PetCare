import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import { MultiBar, MultiBarToggle } from "react-native-multibar";

import { Home, WorldMap, Private, Profile, Settings, WelcomeScreen } from "../screens";
import { Routes } from "./Routes";

const TabsNavigator = createBottomTabNavigator(
  {
    [Routes.TabsHome]: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="paw" color={tintColor} size={24} />
        )
      })
    },
    [Routes.TabMap]: {
      screen: WorldMap,
      
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map" color={tintColor} size={24} />
        )
      })
    },
    MultiBar: {
      screen: () => null,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <MultiBarToggle
            navigation={navigation}
            actionSize={30}
            routes={[
              {
                routeName: Routes.OtherScreen,
                color: "#089CDF",
                icon: <Icon name="rocket" color="#FFF" size={20} />
              },
              {
                routeName: Routes.OtherScreen,
                color: "#089CDF",
                icon: <Icon name="dashboard" color="#FFF" size={15} />
              },
              {
                routeName: Routes.OtherScreen,
                color: "#089CDF",
                icon: <Icon name="gears" color="#FFF" size={15} />
              }
            ]}
            icon={<Icon name="plus" color="#FFFFFF" size={30} />}
          />
        )
      }),
      params: {
        navigationDisabled: true
      }
    },
    [Routes.TabsPrivate]: {
      screen: Private,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="lock" color={tintColor} size={24} />
        )
      })
    },
    [Routes.TabsProfile]: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarComponent: MultiBar,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#FF7E7E",
      inactiveTintColor: "#CCCCCC",
      style: {
        backgroundColor: "#FFF"
      },
      tabStyle: {}
    }
  }
);

const WorldMapStack = createStackNavigator({
  Map: { screen: WorldMap },
  Settings: {screen: Settings}
});

const PrivateStack = createStackNavigator({
  Home: { screen: Home },
  Map: { screen: WorldMap },
  Settings: {screen: Settings}
});

const BaseNavigatorContainer = createAppContainer(
  createStackNavigator(
    {
      [Routes.Tabs]: TabsNavigator,
      [Routes.OtherScreen]: Settings,
      Map: { screen: WorldMapStack },
      Login: { screen: PrivateStack},
    },
    {
      headerMode: "none",
      //mode: "modal"
    }
  )
);

export { BaseNavigatorContainer as BaseNavigator };
