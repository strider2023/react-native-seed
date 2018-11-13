import React, { Component } from 'react';
import {View, TextInput, Text, Button, Image} from 'react-native';
import LoginStyle from '../../styles/login.styles.js'

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  render() {
    return (
      <View style={LoginStyle.styles.container}>
        <TextInput style={{height: 40}} placeholder="Email Id" keyboardType="email-address" onChangeText={(email) => this.setState({email})} value={this.state.email}/>
        <TextInput style={{height: 40}} placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.setState({password})} value={this.state.password}/>
      </View>
    );
  }
}
