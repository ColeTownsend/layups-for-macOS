import {
  BEGIN_DRIBBBLE_SSO,
  DRIBBBLE_SSO_FAILURE,
  DRIBBBLE_SSO_SUCCESS,
  LOG_OUT
} from './action-types';

export function pressLogInWithDribbble() {
  return dispatch => {
    dispatch({
      type: BEGIN_DRIBBBLE_SSO
    });

    authenticateWithDribbble().then((token => {
      return dispatch({
        type: DRIBBBLE_SSO_SUCCESS,
        token
      }).catch(error => {
        return dispatch({
          type: DRIBBBLE_SSO_FAILURE,
          error
        })
      })
    }))
  }
}

function authenticateWithDribbble() {
  return {
    type: BEGIN_DRIBBBLE_SSO,
    // hit dribbble api?
  }
}

export function logOutDribbble() {
  return {
    type: LOG_OUT,
    // change the route
  };
}
