import React from 'react';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  View,
  TextInput
} = ReactNative;
import ShadowStyles from '../styles/shadows';
import Colors from '../styles/colors';

export default class ShotDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      tags: '',
    }
  }

  updateTitle(title) {
    this.setState({
      title
    });
  }

  updateDescription(description) {
    this.setState({
      description
    });
  }

  updateTags(description) {
    this.setState({
      description
    });
  }

  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  render() {
    return (
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Shot title"
            placeholderTextColor={'#999'}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onFocus={() => this.updateTitle('onFocus')}
            onBlur={() => this.updateTitle('onBlur')}
            onChange={(event) => this.updateTitle(
              event.nativeEvent.text
            )}
            onEndEditing={(event) => {
              this.updateTitle(event.nativeEvent.text)
              this.focusNextField('2')
            }}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            ref="2"
            style={styles.textInput}
            placeholder="Description"
            placeholderTextColor={Colors.Gray}
            returnKeyType="next"
            enablesReturnKeyAutomatically={true}
            onFocus={() => this.updateDescription('onFocus')}
            onBlur={() => this.updateDescription('onBlur')}
            onChange={(event) => this.updateDescription(
              event.nativeEvent.text
            )}
            onEndEditing={(event) => {
              this.updateDescription(event.nativeEvent.text)
            }}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            ref="3"
            value={this.state.tags}
            placeholder="Tags, comma seperated"
            placeholderTextColor={Colors.Gray}
            returnKeyType="next"
            onFocus={() => this.updateTags('onFocus')}
            onChange={(event) => this.updateTags(
              event.nativeEvent.text
            )}
            onEndEditing={(event) => this.updateTags(
              event.nativeEvent.text
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'column',
    width: 386,
    marginTop: 20,
    marginHorizontal: 16,
  },
  textInput: {
    borderWidth: 0,
    borderColor: 'white',
    flex: 1,
    height: 30,
    fontSize: 13,
  },
  inputWrapper: {
    ...ShadowStyles.default,
    borderRadius: 2,
    marginBottom: 10,
    height: 30,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  multilineWrapper: {
    ...ShadowStyles.default,
    borderRadius: 2,
    marginBottom: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    height: 60,
  },
  multiline: {
    borderRadius: 2,
    padding: 4,
    height: 60,
  }
});
