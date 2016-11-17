 import React from 'react';
 import ReactNative from 'react-native-macos';
 const {
   AppRegistry,
   StyleSheet,
   Text,
   View,
 } = ReactNative;
import {Provider} from 'react-redux';
import ShadowStyles from '../styles/shadows';

export default class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Provider store={store}>
          <View style={styles.dribbbleImage}>
            <Text style={styles.uploadPrompt}>
              Drag an image here or browse for one to upload.
            </Text>
          </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  dribbbleImage: {
    ...ShadowStyles.default,
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    borderColor: '#e6e6e6',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'column',
    height: 386 * 0.75,
    justifyContent: 'center',
    marginTop: 25,
    width: 386,
  },
  uploadPrompt: {
    fontSize: 13,
    color: "#999999",
  },
});
