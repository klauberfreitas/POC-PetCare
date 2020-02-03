import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {  SplashScreen } from 'expo';

import Private from "./src/screens/Private";

import { BaseNavigator } from './src/navigation';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <BaseNavigator/>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/robot-dev.png'), //Mudar para ícone do APP
      require('./src/assets/images/robot-prod.png'), //Mudar para logo do APP
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      'Quicksand': require('./src/assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-SemiBold': require('./src/assets/fonts/Quicksand-SemiBold.ttf'),
      'Quicksand-Bold': require('./src/assets/fonts/Quicksand-Bold.ttf'),
      'Chocolate': require('./src/assets/fonts/Chocolate.ttf'),
    }),
  ]);
}


function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}



function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});