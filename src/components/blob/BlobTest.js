import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Input
} from 'react-native';
import BlobServer from './BlobServer';


class BlobTest extends Component {
  onButtonPress(){
    BlobServer();
  }


  render() {
    return (
      <View>

        <TouchableOpacity>
            <Text>
             Hello BlobTest
            </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default BlobTest;
