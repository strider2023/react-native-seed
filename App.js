import React, { Component } from 'react';
import HomeScreen from './src/components/screens/HomeScreen';
import ImagesScreen from './src/components/screens/ImagesScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import {createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    Images: {screen: ImagesScreen}
  }, {
    initialRouteName: 'Login',
  }
);

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    );
  }
}
