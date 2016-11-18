import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import * as Storage from './storage';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(reducers);
