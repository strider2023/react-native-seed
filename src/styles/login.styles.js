import {StyleSheet} from 'react-native';

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'center',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorInputContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  inputContainerStyle: {
    margin: 10,
    flexDirection: 'row', 
    alignItems: 'stretch',
    color: 'white',
    borderColor: 'gray'
  },
  loginButtonStyle: {
    margin: 10,
    flexDirection: 'row', 
    alignItems: 'stretch'
  },
});

export default {
  styles : viewStyles
}
