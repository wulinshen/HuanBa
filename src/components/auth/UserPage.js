import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';



class UserPage extends Component {

    onSignOutUserButtonPress = () => {
          firebase.auth().signOut();
          console.log('Signed Out Already!');
          Actions.refresh();
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>
         Hello {this.props.user.email}
        </Text>
        <Button  style={styles.buttonStyle} buttonColor='red' textColor='white'
        onPress={this.onSignOutUserButtonPress}>
          Logout
        </Button>
      </View>
    );
  }


}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },

  buttonStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default UserPage;
