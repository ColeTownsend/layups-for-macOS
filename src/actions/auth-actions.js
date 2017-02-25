import {
  BEGIN_SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  LOG_OUT
} from './action-types';

import {authenticateWithDribbble} from '../utilities/dribbble';

export function pressLoginWithDribbble() {
  return dispatch => {
    dispatch({type: BEGIN_SIGN_IN});

    authenticateWithDribbble().then(token => {
      return dispatch({type: SIGN_IN_SUCCESS, token,})
    }).catch(error => {
      return dispatch({type: SIGN_IN_FAILURE, error,})
    })
  }
}

export function logOutDribbble() {
  return {
    type: LOG_OUT,
  };
}
