import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
//import {createAppContainer, createSwitchNavigator} from 'react-nativgation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render() {
  return (
    <WelcomeScreen />
  );
}
}

//const SwitchNavigator = createSwitchNavigator({
  //WelcomeScreen: WelcomeScreen
//})

//const AppContainer = createAppContainer(SwitchNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
