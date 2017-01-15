import {
  OWNER_UPDATE,
  OWNER_CREATE,
  OWNER_SAVE_SUCCESS,
  OWNER_FORM_EMPTY
} from '../actions/types';

const INITIAL_STATE = {
  _id: '',
  userName: '',
  profileUrl: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OWNER_UPDATE:
      // console.log({ ...state, [action.payload.prop]: action.payload.value })
      return { ...state, [action.payload.prop]: action.payload.value };
    case OWNER_CREATE:
      return INITIAL_STATE;
    case OWNER_SAVE_SUCCESS:
      return INITIAL_STATE;
    case OWNER_FORM_EMPTY:
      return INITIAL_STATE;
    default:
      return state;
  }
};
