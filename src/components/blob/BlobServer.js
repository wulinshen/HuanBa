import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
// import * as azure from 'azure-storage';


const BlobServer = () => {
// const accountName = '';
// const accountKey = '';
const blobService = azure.createBlobServiceAnonymous('https://vincernblob.blob.core.windows.net/');
blobService.createContainerIfNotExists('mycontainer', {
  publicAccessLevel: 'blob'
}, function(error, result, response) {
  if (error) {
    console.log(error);
  }
  else {
    // if result = true, container was created.
    // if result = false, container already existed.
    console.log('result: ', result);
    console.log('response: ', response);
  }
});

blobService.createBlockBlobFromLocalFile('mycontainer', 'taskblob', 'ss.jpg', function(error, result, response) {
  if (error) {
    console.log(error);
  }
  else {
    // file uploaded
    console.log('result: ', result);
    console.log('response: ', response);
  }
});

}

export default BlobServer;
