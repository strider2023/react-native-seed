import React, { Component } from 'react';
import HomeScreen from './src/components/screens/home-screen';
import ImagesScreen from './src/components/screens/images-screen';
import LoginScreen from './src/components/screens/LoginScreen';
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
    return <RootStack /> ;
  }
}
