import React from 'react';
import ReactNative from 'react-native-macos';
const {
  StyleSheet,
  View,
} = ReactNative;
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../actions/auth-actions';
// import * as PostActions from '../actions/post-actions';

// screens
import LoginScreen from './login-screen';
// import Home from './home.js'

// import routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const auth_actions = bindActionCreators(AuthActions, this.props.dispatch);
    // const post_actions = bindActionCreators(PostActions, this.props.dispatch);

    return (
      <View style={styles.container}>
        <LoginScreen actions={auth_actions} {...this.props}/>
        {/* {this.props.token && <Home {...this.props} actions={post_actions}/>} */}
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
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return state;
}

const AppContainer = connect(mapStateToProps)(App);
module.exports = AppContainer;
