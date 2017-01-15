import { Actions } from 'react-native-router-flux';
import {
  OWNER_UPDATE,
  OWNER_CREATE,
  OWNER_FETCH_SUCCESS,
  OWNER_SAVE_SUCCESS,
  OWNER_FORM_EMPTY
} from './types';
import axios from 'axios';

// const apiUrl = 'https://vince2ndtry.herokuapp.com/users';
const apiUrl = 'http://localhost:8000/users';
const userid = '5869e210734d1d07ca07c3dd';

export const ownerUpdate = ({ prop, value }) => {
  // console.log({ prop, value });
  return {
    type: OWNER_UPDATE,
    payload: { prop, value }
  };
};

export const ownerCreate = ({ userName, profileUrl }) => {
  return (dispatch) => {
    axios.post(`${apiUrl}`, { userName, profileUrl })
      .then(() => {
        dispatch({ type: OWNER_CREATE });
        Actions.OwnerProfileList({ type: 'reset' });
        Actions.refresh();
      });
  };
};

export const ownerFetch = () => {
  return (dispatch) => {
    axios.get(`${apiUrl}/${userid}`).then(response => {
        dispatch({ type: OWNER_FETCH_SUCCESS, payload: response.data });
       //  console.log(response.data);
    })
  };
};

export const ownerSave = ({ userName, profileUrl }) => {
  return (dispatch) => {
      axios.put(`${apiUrl}/${userid}`, { userName, profileUrl })
      .then((result) => {
        dispatch({ type: OWNER_SAVE_SUCCESS });
        // console.log(userName, profileUrl);
        // console.log(`${apiUrl}/${userid}`);
        // Actions.pop();
        Actions.OwnerProfileListItemDetail({item: result.data, type: 'reset' });
        Actions.refresh();
    });
  };


};

export const ownerDelete = ({ _id }) => {
  return (dispatch) => {
      axios.delete(`${apiUrl}/${userid}`)
      .then(() => {
        dispatch({ type: OWNER_FORM_EMPTY });
        Actions.OwnerProfileList({ type: 'reset' });
      });
    };
  };

export const resetOwnerForm = () => {
  return (dispatch) => {
       dispatch({ type: OWNER_FORM_EMPTY });
  }
} ;
