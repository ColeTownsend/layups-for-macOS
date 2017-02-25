import React from 'react';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
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

  removeImage() {
    this.setState({files: []})
  }

  onDrop(e) {
    this.setState({files: e.nativeEvent.files, dragOver: false})
  }

  render() {
    return (
      <View style={[styles.dribbbleImage, this.state.dragOver && styles.activeBg]}>
        {this.state.files.length > 0 ?
          <Image
            source={{uri: `file://${this.state.files[0]}`}}
            style={styles.base}
          />
          :
          <Text style={[styles.uploadPrompt, this.state.dragOver && styles.activeText]}>
            {this.state.files > 0 ? this.state.files : 'Drag here a file'}
          </Text>
        }

        {/* Overlay view */}
        <View style={[styles.overlay, this.state.dragOver && styles.activeBg]}
          draggedTypes={['NSFilenamesPboardType']}
          onMouseEnter={() => this.setState({mouseOver: true})}
          onDragEnter={() => this.setState({dragOver: true})}
          onDragLeave={() => this.setState({dragOver: false})}
          onDrop={(e) => this.onDrop(e)}>
          {this.state.dragOver &&
            <Text style={styles.activeText}>
              {this.state.files > 0 ? 'Replace this image' : 'Drop a file here'}
            </Text>
          }
        </View>

        {this.state.mouseOver && this.state.files.length > 0 &&
          <Button
            bezelStyle={'circular'}
            image={require('../assets/ex_normal.png')}
            style={styles.icon}
            onClick={() => this.removeImage()}
            underlayColor={'transparent'}
          />
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
  icon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'column',
    height: 386 * 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    width: 386,
    backgroundColor: 'transparent'
  },
  activeBg: {
    backgroundColor: '#247FEC',
    borderRadius: 4,
  },
  activeText: {
    color: 'white'
  },
  uploadPrompt: {
    fontSize: 13,
    color: "#999999",
  },
  base: {
    width: 386,
    height: 386 * 0.75,
    borderRadius: 4,
  },
});
