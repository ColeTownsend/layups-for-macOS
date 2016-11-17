import React from 'react';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  Text,
  TextInput,
  View,
} = ReactNative;
import {Provider} from 'react-redux';
import ShadowStyles from '../styles/shadows';

export default class ShotDetailsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Provider store={store}>
        <View style={styles.form}>

        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  form: {

  },
});
