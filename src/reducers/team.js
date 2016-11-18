import {
  SET_SHOT_TEAM
} from '../../actions/action-types';


const initialState = {
  team: null
}

export default function editShotTeamReducer(state = initialState, action) {
  switch(action.type) {
    case SET_SHOT_TEAM:
      return {
        ..state,
        team: action.team,
      };
    default
      return state;
  }
}
