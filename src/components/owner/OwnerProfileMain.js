import React, { Component } from 'react';
import {
  Text,
  View,
  TabBarIOS,
  TouchableHightlight
} from 'react-native';
import {Button} from '../common/Button';
import { Actions } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import NavBar from '../navigation/NavBar';



class OwnerProfileMain extends Component {

  onMyItemsButtonPress() {
     Actions.MyShelterList();
  }

  onMyProfileButtonPress() {
     Actions.OwnerProfileListItemDetail();
  }


  render() {
    return (
   <View>
   <Text> Hello, Vince</Text>
     <View>

      <View style={styles.viewStyle}>
        <Button onPress={this.onMyItemsButtonPress} buttonColor='royalblue' textColor="white">
          My Items
       </Button>
      </View>

      <View>
       <Button onPress={this.onMyOrdersButtonPress} buttonColor='peru' textColor="white">
          My Orders
      </Button>
      </View>

      <View>
       <Button onPress={this.onFriendsOrdersButtonPress} buttonColor='green' textColor="white">
          Friends Orders
      </Button>
      </View>

      <View>
       <Button onPress={this.onMyProfileButtonPress} buttonColor='grey' textColor="white">
          My Profile
      </Button>
      </View>

     </View>

   </View>
    );
  }
}

const styles ={
  viewStyle: {
    paddingTop:100
  },
  buttonStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
}


export default OwnerProfileMain;
