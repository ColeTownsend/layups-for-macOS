 import React from 'react';
 import ReactNative from 'react-native-macos';
 const {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity
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
        <View style={[styles.dribbbleImage, this.state.dragOver && styles.activeBg]}>
          {this.state.files.length > 0 ?
            <Image
              onMouseEnter={() => this.setState({mouseOver: true})}
              onMouseLeave={() => this.setState({mouseOver: false})}
              source={{uri: `file://${this.state.files[0]}`}}
              style={styles.base}
            />
            :
            <Text style={[styles.uploadPrompt, this.state.dragOver && styles.activeText]}>
              {this.state.files > 0 ? this.state.files : 'Drag here a file'}
            </Text>
          }

          {this.state.mouseOver && this.state.files.length > 0 &&
            <TouchableOpacity style={styles.touchable} onPress={() => alert('Hi!')}>
              <Text style={styles.touchableText}>Remove image</Text>
            </TouchableOpacity>
          }

          <View style={styles.overlay}
            draggedTypes={['NSFilenamesPboardType']}
            onMouseEnter={() => this.setState({mouseOver: true})}
            onMouseLeave={() => this.setState({mouseOver: false})}
            onDragEnter={() => this.setState({dragOver: true})}
            onDragLeave={() => this.setState({dragOver: false})}
            onDrop={(e) => this.setState({files: e.nativeEvent.files, dragOver: false})}
          >
          </View>

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
  },
  touchableText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12,
  },
  touchable: {
    height: 386 * 0.75,
    width: 386,
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  overlay: {
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    flexDirection: 'column',
    height: 386 * 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    width: 386,
    borderRadius: 4,
    backgroundColor: 'transparent'
  },
  activeBg: {
    backgroundColor: '#247FEC',
  },
  activeText: {
    color: 'white'
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
