import { Actions } from 'react-native-router-flux';
import {
  ITEM_UPDATE,
  ITEM_CREATE,
  ITEMS_FETCH_SUCCESS,
  ITEM_SAVE_SUCCESS,
  ITEM_FORM_EMPTY
} from './types';
import axios from 'axios';
import  * as BlobServer  from '../components/blob/BlobServer';


 const apiUrl = 'https://vince2ndtry.herokuapp.com/users';
// const apiUrl = 'http://localhost:8000/users';
const userid = '5869e210734d1d07ca07c3dd';

export const itemUpdate = ({ prop, value }) => {
  return {
    type: ITEM_UPDATE,
    payload: { prop, value }
  };
};

export const itemCreate = ({ itemName, category, description, itemImageUrl }) => {
  return (dispatch) => {
    // console.log('itemImageUrl',itemImageUrl);
    // console.log('itemImageUrl.search"mobile"', itemImageUrl.search('mobile'));
    if (itemImageUrl.search('mobile') > 0) {
      BlobServer.uploadImage(itemImageUrl)
          .then(url => {
            itemImageUrl = url;
            axios.post(`${apiUrl}/${userid}/items`, { itemName, category, description, itemImageUrl })
              .then(() => {
                dispatch({ type: ITEM_CREATE });
                Actions.MyShelterList({ type: 'reset' });
                Actions.refresh();
              });
           })
              .catch(error => console.log(error));
    }
    else {
    // itemImageUrl = 'https://upload.wikimedia.org/wikipedia/en/b/b7/Nologo.png';
    axios.post(`${apiUrl}/${userid}/items`, { itemName, category, description, itemImageUrl })
      .then(() => {
        dispatch({ type: ITEM_CREATE });
        Actions.MyShelterList({ type: 'reset' });
        Actions.refresh();
      })
      .catch(error => console.log(error));
      console.log('itemImageUrl.search"mobile" = 0');
    }
   }
  };


export const itemsFetch = () => {
  return (dispatch) => {
    axios.get(`${apiUrl}/${userid}`).then(response => {
        dispatch({ type: ITEMS_FETCH_SUCCESS, payload: response.data.items });
        // console.log(response.data[0].items);
    })
  };
};

export const itemSave = ({ _id, itemName, category, description, itemImageUrl }) => {
  return (dispatch) => {
    if (itemImageUrl.search('mobile') > 0) {
        BlobServer.uploadImage(itemImageUrl)
            .then(url => {
              itemImageUrl = url;
               console.log('url:',url);
               console.log('itemImageUrl:',itemImageUrl);
              axios.put(`${apiUrl}/${userid}/items/${_id}`, { itemName, category, description, itemImageUrl })
                .then(() => {
                  dispatch({ type: ITEM_SAVE_SUCCESS });
                  Actions.MyShelterList({ type: 'reset' });
                  Actions.refresh();
                });
             })
                .catch(error => console.log(error));
      }
      else {
      // itemImageUrl = 'https://upload.wikimedia.org/wikipedia/en/b/b7/Nologo.png';
      axios.put(`${apiUrl}/${userid}/items/${_id}`, { itemName, category, description, itemImageUrl })
        .then(() => {
          dispatch({ type: ITEM_SAVE_SUCCESS });
          Actions.MyShelterList({ type: 'reset' });
          Actions.refresh();
        })
        .catch(error => console.log(error));
      }
  };
};

export const itemDelete = ({ _id, itemImageUrl }) => {
  return (dispatch) => {
      axios.delete(`${apiUrl}/${userid}/items/${_id}`)
      .then(() => {
        // console.log(`${apiUrl}/${userid}/items/${_id}`);
        BlobServer.deleteImage(itemImageUrl)
        .then(url => console.log('url from itemDelete:', url));
        dispatch({ type: ITEM_FORM_EMPTY });
        Actions.MyShelterList({ type: 'reset' });
      });
    };
  };

export const resetForm = () => {
  return (dispatch) => {
       dispatch({ type: ITEM_FORM_EMPTY });
  }
} ;
