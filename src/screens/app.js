import React from 'react';
import ReactNative from 'react-native-macos';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = ReactNative;
import ShadowStyles from '../styles/shadows'
import {Provider} from 'react-redux';
import ShotUploader from '../components/shot-image-uploader';
import ShotDetailsForm from '../components/shot-image-uploader';
// import LoginScreen from './login-screen';

// Post Shot
// import PostShotScreen from './edit-event-screen.js'

// import store from '../store';
import routes from './routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Provider store={store}>
        <View style={styles.container}>
          <ShotUploader />
          <View style={styles.infoWrapper}>

          </View>
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  infoWrapper: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
