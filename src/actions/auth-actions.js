import {
  BEGIN_DRIBBBLE_SSO,
  LOG_OUT
} from './actionTypes';

export function pressLogInWithDribbble() {
  return (dispatch) => {
    const promisifiedDispatch = promisifyDispatch(dispatch);

    return promisifiedDispatch(authenticateWithDribbble()).then(dribbbleAuth => {
      return promisifiedDispatch(logInWithDribbble(dribbbleAuth.response.code));
    });
  };
}

function authenticateWithDribbble() {
  return {
    type: BEGIN_DRIBBBLE_SSO,
    // hit dribbble api?
  }
}

export function logInWithDribbble() {
  return {
    type: LOG_IN,
    // change the route
  };
}
