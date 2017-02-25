// 'use strict';
//
// import {
//   SIGNIN_REQUEST,
//   SIGNIN_SUCCESS,
//   SIGNIN_FAILURE,
//   GENERAL_ERROR,
//   SHOT_IS_UPLOADING,
//   SHOT_UPLOADED
// } from './actions';
//
// import { LOAD, SAVE } from 'redux-storage';
//
// type GlobalState = any;
//
// const defaultState: GlobalState = {
//   isLoading: false,
// };
//
// export default function reducer(state: GlobalState, action: any): GlobalState {
//   if (!state) { state = defaultState; } // Flow default parameter
//   switch (action.type) {
//     case SIGNIN_REQUEST:
//       return {
//         ...state,
//         error: null,
//         isLoading: true
//       };
//     case SIGNIN_SUCCESS:
//       return {
//         ...state,
//         error: null,
//         isLoading: false,
//         token: action.token
//       };
//     case SIGNIN_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.error
//       };
//
//     case LOAD:
//       if (state.user) {
//         state.user = Object.keys(state.user).map(m => state.user[m]);
//       }
//       if (state.teams) {
//         state.teams = Object.keys(state.teams).map(m => state.teams[m]);
//       }
//       return { ...state, loaded: !state.loaded};
//
//     case SAVE:
//       return state;
//
//     case GENERAL_ERROR:
//       return { ...state, error: action.error };
//
//     case SHOT_IS_UPLOADING:
//       return {...state, uploading: true};
//
//     case SHOT_UPLOADED:
//       return {
//         ...state,
//         uploading: false,
//       };
//
//     default:
//       return state;
//   }
// }
