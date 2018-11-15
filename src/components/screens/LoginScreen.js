import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import LoginStyle from '../../styles/login.styles.js';

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  state = {
    visible: true
  };

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  loginUser() {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.props.navigation.navigate('Home');
    } else 
      this.setState(state => ({ visible: !state.visible }))
  }

  render() {
    return (
      <View style={LoginStyle.styles.container}>
        <TextInput 
          mode="outlined"
          style={LoginStyle.styles.inputContainerStyle} 
          label="Email Id"
          placeholder="Enter email id" 
          keyboardType="email-address" 
          onChangeText={(email) => this.setState({email})} 
          value={this.state.email}/>
        <TextInput 
          mode="outlined"
          style={LoginStyle.styles.inputContainerStyle}
          label="Password"
          placeholder="Enter password" 
          secureTextEntry={true} 
          onChangeText={(password) => this.setState({password})} 
          value={this.state.password}/>
        <Button icon="add-a-photo" mode="contained" onPress={() => this.loginUser()}>
          Icon
        </Button>
        <Snackbar
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
          duration={Snackbar.DURATION_MEDIUM}>
          Please enter your email and password.
        </Snackbar>
      </View>
    );
  }
}
