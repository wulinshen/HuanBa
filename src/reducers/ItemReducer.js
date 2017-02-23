import {
  ITEMS_FETCH_START,
  ITEMS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_FETCH_SUCCESS:
    // console.log(action.payload);
      return action.payload;
    case ITEMS_FETCH_START:
      return {isLoading: true };
    default:
      return state;
  }
};
