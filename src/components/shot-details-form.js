import React from 'react';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  View,
  TextInput,
  // TouchableOpacity,
  // TouchableHighlight,
  // Linking,
  // PickerIOS,
  // Image,
  // Dimensions,
} = ReactNative;
import ShadowStyles from '../styles/shadows';

export default class ShotDetailsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Provider store={store}>
        <View style={styles.form}>
          <View style={styles.title}>
            <TextInput
              style={styles.textinput}
              placeholder="Title"
              autoCorrect={false}
            />
          </View>
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
});
