import React, { Component } from 'react';
import {StyleSheet, AppRegistry, View, Image} from 'react-native';

export default class ImagesScreen extends Component {

  static navigationOptions = {
    title: 'Images',
  };

  constructor(props) {
    super(props);
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{flex: 1}}>
        <Image source={pic} style={{flex:1}}/>
        <Image source={pic} style={{flex:1}}/>
        <Image source={pic} style={{flex:1}}/>
      </View>
    );
  }
}
