import React from 'react';
import ReactNative from 'react-native-macos';
const {
  View,
  StyleSheet,
} = ReactNative;

import ShotUploader from '../components/shot-image-uploader';
import ShotDetailsForm from '../components/shot-details-form';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ShotUploader />
        <View style={styles.infoWrapper}>
          <ShotDetailsForm />
        </View>
      </View>
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
    flex: 0,
  },
});
