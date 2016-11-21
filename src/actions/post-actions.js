import {
  INITIALIZE_SHOT,
  EDIT_SHOT_TITLE,
  EDIT_SHOT_DESCRIPTION,
  EDIT_SHOT_TAGS,
  SET_SHOT_TEAM,
  EDIT_SHOT_REBOUND,
  EDIT_SHOT_ATTACHMENTS,
  EDIT_IMAGE,
  POST_SHOT,
} from './action-types';

// if anything is edited, this is triggered
export function initializeShot() {
  return dispatch => {
    dispatch({
      type: INITIALIZE_SHOT
    });
  }
}

export function editShotTitle() {
  return dispatch => {
    dispatch({
      type: EDIT_SHOT_TITLE
    });
  }
}

export function editShotDescription() {
  return dispatch => {
    dispatch({
      type: EDIT_SHOT_DESCRIPTION
    });
  }
}

export function editShotTags() {
  return dispatch => {
    dispatch({
      type: EDIT_SHOT_TAGS
    });
  }
}

export function editShotRebound() {
  return dispatch => {
    dispatch({
      type: EDIT_SHOT_REBOUND
    });
  }
}

export function editShotAttachments() {
  return dispatch => {
    dispatch({
      type: EDIT_SHOT_ATTACHMENTS
    });
  }
}

export function editImage() {
  return dispatch => {
    dispatch({
      type: EDIT_IMAGE
    });
  }
}

export function setShotTeam() {
  return dispatch => {
    dispatch({
      type: SET_SHOT_TEAM
    });
  }
}

// might need to hit some api?
export function postShot() {
  return dispatch => {
    dispatch({
      type: POST_SHOT
    });
  }
}
