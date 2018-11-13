import React, { Component } from 'react';
import {View, Image} from 'react-native';
import List from '../layouts/list-component.js';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    //this.props.navigation.navigate('Images');
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <List name='Rexxar' navigation={this.props.navigation}/>
        <List name='Jaina' navigation={this.props.navigation}/>
        <List name='Valeera' navigation={this.props.navigation}/>
      </View>
    );
  }
}
