// import createReactNativeStorageEngine from 'redux-storage-engine-reactnativeasyncstorage';
// import * as Storage from 'redux-storage';
// import * as Actions from '../actions/actionTypes';
import React from 'react';
import ReactNative from 'react-native-macos';
import {AsyncStorage} from ReactNative;
import { asyncSessionStorage } from 'redux-persist';
import store from './index';
import LoginScreen from '../reducers/login-screen';

persistStore(store, {
  storage: AsyncStorage,
  whitelist: ACTION_WHITELIST,
  keyPrefix: 'layups'
});

// we want to store:
// the user token
// the user data
//

const ACTION_WHITELIST = [
  LoginScreen,
  // set team
];
