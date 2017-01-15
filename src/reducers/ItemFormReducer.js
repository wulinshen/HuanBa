import {
  ITEM_UPDATE,
  ITEM_CREATE,
  ITEM_SAVE_SUCCESS,
  ITEM_FORM_EMPTY
} from '../actions/types';

const INITIAL_STATE = {
  _id: '',
  itemName: '',
  category: '',
  description: '',
  itemImageUrl: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ITEM_CREATE:
      return INITIAL_STATE;
    case ITEM_SAVE_SUCCESS:
      return INITIAL_STATE;
    case ITEM_FORM_EMPTY:
      return INITIAL_STATE;
    default:
      return state;
  }
};
