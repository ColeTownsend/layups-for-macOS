import React from 'react';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} = ReactNative;
import shader from 'shader';
import {pressLogInWithDribbble} from '../actions/auth-actions';
import Spacing from '../styles/spacing';
import ShadowStyles from '../styles/shadows';
import Colors from '../styles/colors';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  pressLoginWithDribbble() {
    this.props.dispatch(pressLogInWithDribbble());
  }

  render() {
    return (
      // <Provider store={store}>
        <View style={styles.container}>
          <Text>Test</Text>
          <TouchableOpacity
            underlayColor={shader(Colors.Dribbble, -0.05)}
            activeOpacity={1}
            onPress={() => this.pressLoginWithDribbble()}>
            <View style={styles.dribbbleButton}>
              <Text style={styles.dribbbleButtonText}>Login with Dribbble</Text>
            </View>
          </TouchableOpacity>
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dribbbleButton: {
    ...ShadowStyles.pink,
    backgroundColor: Colors.Dribbble,
    borderRadius: 2,
    marginBottom: Spacing.Default,
    paddingVertical: Spacing.Default,
    paddingHorizontal: Spacing.Medium,
  },
  dribbbleButtonText: {
    fontSize: 12,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
