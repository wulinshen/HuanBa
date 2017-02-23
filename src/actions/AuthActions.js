import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER_FAIL
} from './types';
import firebase from 'firebase';
// import { connect } from 'react-redux';
// import { ownerUpdate, ownerSave, ownerDelete, resetOwnerForm } from '../../actions';


// Init Firebase
// const config = {
//   apiKey: "AIzaSyAHeWH1n3EEgFU0vFbEjCsDNFmW_cWZpLA",
//       authDomain: "firstfirebasedb-22947.firebaseapp.com",
//       databaseURL: "https://firstfirebasedb-22947.firebaseio.com",
//       storageBucket: "firstfirebasedb-22947.appspot.com",
//       messagingSenderId: "1078528701398"
// };
// firebase.initializeApp(config);


export const getLoginUser = () => {
  return (dispatch) => {
  return new Promise (
    (resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // console.log(user);
      resolve(user);
    } else {
      reject(error);
    }
 });
}
  );
};
};


export const signOutUser = () => {
  return (dispatch) => {
        firebase.auth().signOut();
        console.log('Signed Out Already!')
 };
};



export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ( email, password ) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        console.log('error',error);
      });
  };
};



export const registerUser = ( email, password ) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      };
};



const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const registerUserFail = (dispatch) => {
  dispatch({ type: REGISTER_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.UserPage({user});

};
