import React, { Component } from 'react';
import {StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import ListStyle from '../../styles/list.styles.js'

export default class List extends Component {

  constructor(props) {
    super(props);
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  onListItemClick() {
    Alert.alert('You tapped the name ' + this.props.name);
    this.props.navigation.navigate('Images', { name: this.props.name });
  }

  render() {
    return (
      <TouchableOpacity style={ListStyle.styles.list_item} onPress={() => this.onListItemClick()}>
        <Text style={ListStyle.styles.list_text}>Hello {this.props.name}!</Text>
      </TouchableOpacity>
    );
  }
}
