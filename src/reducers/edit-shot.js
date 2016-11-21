import {
  // INITIALIZE_SHOT,
  EDIT_SHOT_TITLE,
  EDIT_SHOT_DESCRIPTION,
  EDIT_SHOT_TAGS,
  SET_SHOT_TEAM,
  EDIT_SHOT_REBOUND,
  EDIT_SHOT_ATTACHMENTS,
  EDIT_IMAGE,
  // POST_SHOT,
} from '../actions/action-types';

const initialState = {
  title: '',
  description: '',
  tags: [],
  image: {},
  team: {},
  reboundUrl: '',
};

export default function editShot(state = initialState, action) {
  switch(action.type) {
    case EDIT_SHOT_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case EDIT_SHOT_DESCRIPTION:
      return {
        ...state,
        title: action.description,
      };
    case EDIT_SHOT_TAGS:
      return {
        ...state,
        title: action.tags,
      };
    case EDIT_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    case EDIT_SHOT_REBOUND:
      return {
        ...state,
        reboundUrl: action.reboundUrl,
      };
    case EDIT_SHOT_ATTACHMENTS:
      return {
        ...state,
        attachments: action.attachments,
      };
    case SET_SHOT_TEAM:
      return {
        ...state,
        team: action.team,
      };
    default:
      return state;
  }
}
