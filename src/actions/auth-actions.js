import {
  BEGIN_DRIBBBLE_SSO,
  DRIBBBLE_SSO_FAILURE,
  DRIBBBLE_SSO_SUCCESS,
  LOG_OUT
} from './action-types';

import {authenticateWithDribbble} from '../utilities/dribbble';

export function pressLoginWithDribbble() {
  return dispatch => {
    dispatch({type: BEGIN_DRIBBBLE_SSO});

    authenticateWithDribbble().then(token => {
      return dispatch({type: DRIBBBLE_SSO_SUCCESS, token,})
    }).catch(error => {
      return dispatch({type: DRIBBBLE_SSO_FAILURE, error,})
    })
  }
}

function logOutDribbble() {
  return {
    type: LOG_OUT,
    // change the route,
  };
}
