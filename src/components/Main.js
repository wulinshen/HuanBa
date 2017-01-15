import React, { Component } from 'react';
import {
  Text,
  View,
  TabBarIOS,
  TouchableHightlight
} from 'react-native';
import {Button} from './common/Button';
import { Actions } from 'react-native-router-flux';
// import Tabs from 'react-native-tabs';
// import NavBar from './navigation/NavBar';



class Main extends Component {

  onLookAroundButtonPress() {
    // Actions.ShoppingCart();
    //  Actions.LoginForm();
     Actions.LookAroundMain();
    // console.log("clicked");
  }

  onMyShelterButtonPress() {
    // Actions.ShoppingCart();
   Actions.LoginForm();
    // Actions.LookAroundList();
    // console.log("clicked");
  }


  render() {
    return (
   <View>
   <Text>Welcome to 换客！</Text>
     <View>
      <View style={styles.viewStyle}>
        <Button onPress={this.onLookAroundButtonPress.bind(this)} buttonColor='royalblue' textColor="white">
          Look Around
       </Button>
      </View>

      <View>
       <Button onPress={this.onMyShelterButtonPress.bind(this)} buttonColor='peru' textColor="white">
         My Shelter
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


export default Main;
