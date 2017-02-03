import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

// import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';
// import { connect } from 'react-redux';
// import { ownerUpdate, ownerSave, ownerDelete, resetOwnerForm } from '../../actions';


// Init Firebase
const config = {
  apiKey: "AIzaSyAHeWH1n3EEgFU0vFbEjCsDNFmW_cWZpLA",
  authDomain: "firstfirebasedb-22947.firebaseapp.com",
  storageBucket: "firstfirebasedb-22947.appspot.com",
};
firebase.initializeApp(config);
const storage = firebase.storage();

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export const uploadImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = storage.ref('images').child(`${sessionId}`);
    console.log(`sessionId`,sessionId);
    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        // console.log('url:',url);
        resolve(url);
      })
      .catch((error) => {
        console.log('error:',error);
        reject(error);
    })
  })
};


export const deleteImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const imageFileName = uri.substring(uri.indexOf("images%2F")+9, uri.indexOf("?alt="));
    console.log('imageFileName',imageFileName);
    const imageRef = storage.ref('images').child(imageFileName);
         imageRef.delete()
      .then(() => {
        // return imageRef.getDownloadURL();
        console.log('deleted');
      })
      .catch((error) => {
        console.log('error:',error);
        reject(error);
    })
  })
};
