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
      <View style={styles.form}>
        <View style={styles.title}>
          <TextInput
            style={styles.textinput}
            placeholder="Title"
            autoCorrect={false}
          />
        </View>
        <View style={styles.description}>
          <TextInput
            style={styles.textinput}
            placeholder="Description"
            autoCorrect={true}
          />
        </View>
        <View style={styles.tags}>
          <TextInput
            style={styles.textinput}
            placeholder="Tags, comma seperated"
            autoCorrect={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    ...ShadowStyles.default,
    flex: 1,
    flexDirection: 'row',
    height: 40,
    width: 300,
  },
});
