import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Input, Card, CardSection, Button} from '../common';
import { Actions } from 'react-native-router-flux';
import Cart from '../shoppingcart/Cart';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/OwnerActions'
import NavBar from '../navigation/NavBar';





class OwnerProfileListItemDetail extends Component {
  constructor(props){
     super(props);

     this.onEditButtonPress = this.onEditButtonPress.bind(this);

  }

  componentWillMount() {
    Actions.refresh();
    this.props.actions.ownerFetch();
  }



  onEditButtonPress(){
    // console.log(this.props.item);
    Actions.OwnerProfileEdit({item: this.props.ownersData})
     console.log(this.props.ownersData);
  }


  render() {
    const {userName, stars, profileUrl} = this.props.ownersData;
    const {thumbnailContainerStyle, imageStyle, headerContentStyle, headerTextStyle} = styles;
    // console.log(name, category, imageUrl);
    return (
    <View>
        <Card>
          <CardSection>
            <Image
              style={imageStyle}
              source={{ uri: profileUrl }}
            />
          </CardSection>

          <CardSection>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{userName}</Text>
              <Text>{stars}</Text>
            </View>
          </CardSection>
        </Card>

        <View>
          <Button onPress={this.onEditButtonPress} buttonColor='blue' textColor="white">
             Edit
          </Button>
        </View>
    </View>
    );
  }
}

  const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 25
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };

  const mapStateToProps = state => {
    // console.log(state.ownersData);
   return { ownersData: state.ownersData };
 };

  const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
 }

export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfileListItemDetail);
