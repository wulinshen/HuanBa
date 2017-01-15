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
import * as actionCreators from '../../actions/CartActions'
import NavBar from '../navigation/NavBar';





class LookAroundListItemDetail extends Component {
  constructor(props){
     super(props);

     this.onAddItem = this.onAddItem.bind(this);
     this.onRemoveItem = this.onRemoveItem.bind(this);
     this.renderButtonText = this.renderButtonText.bind(this);

  }


  onAddItem(){
    const {item, actions} = this.props;
    // console.log(item);
    actions.item_Add(item);
  }

  onRemoveItem(){
    const {item, actions} = this.props;
    // console.log(item);
    actions.item_Remove(item._id);
  }

  renderButtonText(){
    // console.log(this.props.cart);
    const thisStateItem = this.props.cart.items.filter(i=>i._id == this.props.item._id);
    // console.log(thisStateItem[0]);
    // console.log(thisStateItem);
   if (typeof thisStateItem[0] === 'undefined'){
     return (
       <Button onPress={this.onAddItem} buttonColor='royalblue' textColor="white" >
         Add to Cart
       </Button>
     )
   }

   else {
     return (
       <Button onPress={this.onRemoveItem} buttonColor='red' textColor="white" >
         Remove from Cart
       </Button>
     )
   }
  }

  render() {
    const {itemName, category, itemImageUrl} = this.props.item;
    const {thumbnailContainerStyle, imageStyle, headerContentStyle, headerTextStyle} = styles;
    // console.log(name, category, imageUrl);
    return (
    <View>
        <Card>
          <CardSection>
            <Image
              style={imageStyle}
              source={{ uri: itemImageUrl }}
            />
          </CardSection>

          <CardSection>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{itemName}</Text>
              <Text>{category}</Text>
            </View>
          </CardSection>
        </Card>

        <View>
          {this.renderButtonText()}

          <Button buttonColor='orange' textColor="white">
             Owner Page
          </Button>
        </View>
        <NavBar />

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
   // console.log(state.cart);
   return { cart: state.cart };
 };

  const mapDispatchToProps = (dispatch) => {
   return { actions: bindActionCreators(actionCreators, dispatch) }
 }

export default connect(mapStateToProps, mapDispatchToProps)(LookAroundListItemDetail);
