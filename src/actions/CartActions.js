// import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ITEM_ADD,
  ITEM_REMOVE,
  ITEM_CHECK,
  ITEM_UNCHECK
} from './types';

export const item_Add = (item) => {
  return {
    type: ITEM_ADD,
    payload: item
  };
};

export const item_Remove = (_id) => {
  return {
    type: ITEM_REMOVE,
    payload: _id
  };
};

export const item_Check = (item) => {
  return {
    type: ITEM_CHECK,
    payload: item
  };
};

export const item_Uncheck = (item) => {
  return {
    type: ITEM_UNCHECK,
    payload: item
  };
};
