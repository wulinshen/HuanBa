import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Input, Card, CardSection, Button} from '../common';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/CartActions'
import NavBar from '../navigation/NavBar';




class LookAroundListItem extends Component {
  constructor(props){
    super(props);
    this.onItemPress = this.onItemPress.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.renderButtonText = this.renderButtonText.bind(this);
  }

  onItemPress(item){
     console.log('this.props.item:',this.props.item);
     Actions.LookAroundListItemDetail({item: this.props.item})
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
    // console.log(itemName, category, itemImageUrl);

    return (
      <TouchableOpacity onPress={this.onItemPress}>
        <View>
            <Card>
              <CardSection>
                <Image onPress={this.onItemPress}
                  style={imageStyle}
                  source={{ uri: itemImageUrl }}
                />
                <CardSection>
                  <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{itemName}</Text>
                  </View>
                </CardSection>
              </CardSection>
              {this.renderButtonText()}
            </Card>
        </View>

      </TouchableOpacity>
      )
  }
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 100,
    width: 100
  }
};


 const mapStateToProps = state => {
  // console.log(state.cart);
  return { cart: state.cart };
};

 const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}




export default connect(mapStateToProps, mapDispatchToProps)(LookAroundListItem);
