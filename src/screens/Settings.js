import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

class Settings extends React.Component {
    static navigationOptions = {
        headerMode: 'screen',
        headerVisible: false
      };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Settings</Text>
      </SafeAreaView>
    );
  }
}

export { Settings };
