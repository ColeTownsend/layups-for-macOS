import React from 'react';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  Touchable,
  View,
} = ReactNative;
import {connect} from 'react-redux';
import {pressLogInWithDribbble} from '../actions/auth-actions';
import Spacing from '../styles/spacing';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  pressLoginWithDribbble() {
    this.props.dispatch(pressLoginWithDribbble());
  }

  render() {
    return (
      // <Provider store={store}>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.dribbbleButton}
            underlayColor={shader(Colors.DribbblePink, -0.05)}
            activeOpacity={1}
            onPress={() => this.pressLoginWithDribbble()}>
            <Text style={styles.dribbbleButtonText}></Text>
          </TouchableHighlight>
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dribbbleButton: {

  },
  dribbbleButtonText: {
    color: 'white',
  },
});
