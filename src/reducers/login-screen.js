import {
  BEGIN_DRIBBBLE_SSO,
  SIGN_IN
} from '../actions/action-types';
import routes from '../screens/routes';

const initialState = {
  nextRoute: null,
};

export default function loginScreen(state = initialState, action) {
  switch (action.type) {
    case BEGIN_DRIBBBLE_SSO:
      switch (action.status) {
        case 'request':
          return {
            ...state,
            nextRoute: null,
            error: null
          };
        case 'failure':
          return {
            ...state,
            nextRoute: null,
            error: action.error
          };
        default:
          return state;
      }
    case SIGN_IN:
      switch (action.status) {
        case 'success':
          return {
            ...state,
            nextRoute: {name: routes.Home},
            error: null
          }
        case 'failure':
          return {
            ...state,
            nextRoute: null,
            error: action.error.meta
          }
        default:
          return state;
      }
    default:
      return state;
  }
}
