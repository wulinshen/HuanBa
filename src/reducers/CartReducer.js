import {
  ITEM_ADD,
  ITEM_REMOVE,
  ITEM_CHECK,
  ITEM_UNCHECK
} from '../actions/types';
import update from 'immutability-helper';

const INITIAL_STATE = {
 items:[]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_ADD:
    // console.log(state.items);
    // console.log({items:  [...state.items, {...action.payload, isAdded: true, isChecked: false}]});
    // debugger;
    return {items:  [...state.items, {...action.payload, isAdded: true, isChecked: false}]};
    case ITEM_REMOVE:
    // console.log(action.payload);
    // console.log(state.items);
    // console.log([...state.items.filter(item => item.id !== action.payload)]);
    // debugger;
    return {items: [...state.items.filter(item => item._id !== action.payload)]};
    case ITEM_CHECK:
    // console.log({items: [...state.items.filter(item => item.id !== action.payload.id),
    // {...action.payload, isChecked: true}]});
    return {items: [...state.items.filter(item => item._id !== action.payload._id),
     {...action.payload, isChecked: true}]}
     case ITEM_UNCHECK:
     // console.log({items: [...state.items.filter(item => item.id !== action.payload.id),
     // {...action.payload, isChecked: true}]});
     return {items: [...state.items.filter(item => item._id !== action.payload._id),
      {...action.payload, isChecked: false}]}

    default:
      return state;
  }
};
