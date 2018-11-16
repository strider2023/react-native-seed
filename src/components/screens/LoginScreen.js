import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { TextInput, Button, Snackbar, HelperText } from 'react-native-paper';
import LoginStyle from '../../styles/login.styles.js';
import LoginServices from '../../services/login.service.js';

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  state = {
    visible: true,
    message: ''
  };

  constructor(props) {
    super(props);
    this.loginSuccess = this.loginSuccess.bind(this);
    this.state = {email: '', password: ''};
  }

  isUsernameValid = () => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.state.email);

  loginUser() {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      new LoginServices().userLogin(this.state.email, this.state.password, this.loginSuccess, this.loginFailure);
    } else {
      this.setState(state => ({ message: 'Please enter your email and password.' }));
      this.setState(state => ({ visible: !state.visible }));
    }
  }

  loginSuccess(data) {
    if(data.status == 200)
      this.props.navigation.navigate('Home');
    else {
      console.log(data.message);
      this.setState(state => ({ message: data.message }));
      this.setState(state => ({ visible: !state.visible }));
    }
  }

  loginFailure(data) {
    this.setState(state => ({ message: 'Oops something went wrong...' }));
    this.setState(state => ({ visible: !state.visible }));
  }

  render() {
    return (
      <View style={LoginStyle.styles.container}>
        <ImageBackground
          resizeMode={'stretch'}
          style={LoginStyle.styles.imageContainer}
          source={require('../../../assets/images/login_bg.png')}
        >
        {/* <View style={LoginStyle.styles.errorInputContainerStyle}> */}
          <TextInput
            mode="outlined"
            style={LoginStyle.styles.inputContainerStyle}
            label="Email Id"
            placeholder="Enter email id"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}/>
          {/* <HelperText type="error" visible={!this.isUsernameValid()}>
            Please enter valid email address.
          </HelperText> */}
        {/* </View> */}
        <TextInput
          mode="outlined"
          style={LoginStyle.styles.inputContainerStyle}
          label="Password"
          placeholder="Enter password"
            placeholderTextColor= "#ffffff"
            baseColor='#FFFFFF'
            tintColor='#51bc8a'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}/>
        <Button 
          style={LoginStyle.styles.loginButtonStyle}
          mode="contained" 
          onPress={() => this.loginUser()}>
           Login
        </Button>
        <Snackbar
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
          duration={Snackbar.DURATION_MEDIUM}>
          {this.state.message}
        </Snackbar>
        </ImageBackground>
      </View>
    );
  }
}
