import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Colors, List, FAB, Portal } from 'react-native-paper';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  state = {
    open: false,
  };

  list = [
    {
      price: '5,000',
      text: 'April stay also',
    },
    {
      price: '6,000',
      text: 'May stay also',
    },
  ];

  constructor(props) {
    super(props);
    for(var i = 0; i < 20; i++) {
      this.list.push({ price: '5,000', text: 'May stay also'});
    }
  }

  onListItemClicked(name) {
    this.props.navigation.navigate('Images');
  }

  onFabItemClicked(name) {
    Alert.alert('You tapped the name ' + name);
    //this.props.navigation.navigate('Images');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.list.map((val, key) => {
              return <List.Item
                left={props => <List.Icon icon="event" />}
                title={val.text}
                onPress={() => this.onListItemClicked(val.text) }
              />;
            })
          }
        </ScrollView>
        <View style={styles.row}>
          <Portal>
            <FAB.Group
              open={this.state.open}
              icon={this.state.open ? 'today' : 'add'}
              actions={[
                { icon: 'add', onPress: () => { } },
                { icon: 'star', label: 'Star', onPress: () => this.onFabItemClicked('Star') },
                { icon: 'email', label: 'Email', onPress: () => this.onFabItemClicked('Email') },
                { icon: 'notifications', label: 'Remind', onPress: () => this.onFabItemClicked('Remind') },
              ]}
              onStateChange={({ open }) => this.setState({ open })}
              onPress={() => {
                if (this.state.open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.grey200,
    padding: 4,
  },

  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fab: {
    margin: 8,
  },
});
