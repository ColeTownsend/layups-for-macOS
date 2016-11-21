import React from 'react';
import { AppRegistry } from 'react-native-macos';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import reducers from './src/reducers';
import {
  BEGIN_DRIBBBLE_SSO,
  DRIBBBLE_SSO_FAILURE
} from './src/actions/action-types';
import App from './src/screens/app';

const engine = createEngine('layups');
const wrappedReducer = storage.reducer(combineReducers(reducers));
const storageMiddleware = storage.createMiddleware(engine, [BEGIN_DRIBBBLE_SSO, DRIBBBLE_SSO_FAILURE]);

const middleware = process.env.NODE_ENV === 'production' ?
  [thunk, storageMiddleware] :
  [thunk, logger(), storageMiddleware]

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(wrappedReducer);

class LayupsReactNative extends React.Component {
  componentWillMount() {
    storage.createLoader(engine)(store);
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('LayupsReactNative', () => LayupsReactNative);
