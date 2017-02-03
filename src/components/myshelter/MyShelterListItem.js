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




class MyShelterListItem extends Component {
  constructor(props){
    super(props);
    this.onItemPress = this.onItemPress.bind(this);
    this.onEditButtonPress = this.onEditButtonPress.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onItemPress(item){
     Actions.MyShelterListItemDetail({item: this.props.item})
  }

  onEditButtonPress(){
    // console.log(this.props.item);
    Actions.MyShelterEdit({item: this.props.item})
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


  render() {
    const {itemName, category, itemImageUrl} = this.props.item;

    const {thumbnailContainerStyle, imageStyle, headerContentStyle, headerTextStyle, buttonStyle} = styles;
    // console.log(name, category, imageUrl);
    return (
      <View>
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
                </Card>
            </View>
          </TouchableOpacity>
          <View style={buttonStyle}>
          <Button onPress={this.onEditButtonPress} buttonColor='blue' textColor='white'>
            <Text>Edit</Text>
          </Button>
          </View>
      </View>


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
  },
  buttonStyle: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection:'column'

  }
};


 const mapStateToProps = state => {
  // console.log(state.cart);
  return { cart: state.cart };
};

 const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}




export default connect(mapStateToProps, mapDispatchToProps)(MyShelterListItem);
