 import React from 'react';
 import ReactNative from 'react-native-macos';
 const {
   StyleSheet,
   Text,
   View,
   Image,
 } = ReactNative;
import ShadowStyles from '../styles/shadows';

// https://github.com/ptmt/react-native-macos/blob/master/Examples/UIExplorer/js/ImageEditingExample.js
export default class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragOver: false,
      mouseOver: false,
      width: null,
      height: null,
      files: []
    }
  }

  render() {
    return (
        <View style={styles.dribbbleImage}
          draggedTypes={['NSFilenamesPboardType']}
          onMouseEnter={() => this.setState({mouseOver: true})}
          onMouseLeave={() => this.setState({mouseOver: false})}
          onDragEnter={() => this.setState({dragOver: true})}
          onDragLeave={() => this.setState({dragOver: false})}
          onDrop={(e) => this.setState({files: e.nativeEvent.files, dragOver: false})}>
          <Text style={styles.uploadPrompt}>{this.state.files > 0 ? this.state.files : 'Drag here a file'}</Text>
          {this.state.files &&
            <Image source={{uri: `file://${this.state.files[0]}`}} style={styles.base} />
          }
        </View>
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
    overflow: 'hidden',
  },
  uploadPrompt: {
    fontSize: 13,
    color: "#999999",
  },
  base: {
    width: 386 * 0.75,
    height: 386,
  },
});
