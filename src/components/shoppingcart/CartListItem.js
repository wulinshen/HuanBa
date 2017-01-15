import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Input, Card, CardSection, Button} from '../common';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/CartActions'
import CheckBox from 'react-native-checkbox';



class CartListItem extends Component {
  constructor(props){
    super(props);
    // this.onCheck = this.onCheck.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onNavigateToDetail = this.onNavigateToDetail.bind(this);
  }

  // onCheck(){
  //   const {item, actions} = this.props;
  //   // console.log(item);
  //   actions.item_Check(item);
  // }

  onButtonClick(){
    const {isChecked} = this.props.item;
    const {item, actions} = this.props;
    // console.log(isChecked);
    if (isChecked) {
    actions.item_Uncheck(item);
    }
    else {
    actions.item_Check(item);
    }
  }

  onNavigateToDetail(item){
    Actions.LookAroundListItemDetail({item: this.props.item})
  }



  render() {
    const {_id, itemName, itemImageUrl, isChecked} = this.props.item;
    const {thumbnailContainerStyle, imageStyle, headerContentStyle, headerTextStyle} = styles;
    console.log(_id, itemName, isChecked);
    return (
        <View>
            <Card>
              <CardSection>
                  <CheckBox label=''
                  checkboxStyle={styles.checkStyle}
                  checked={isChecked}
                  onChange={this.onButtonClick}
                  />
                  <TouchableOpacity onPress={this.onNavigateToDetail}>
                      <View style={headerContentStyle}>
                          <CardSection>
                              <Image
                                style={imageStyle}
                                source={{ uri: itemImageUrl }}
                              />
                              <CardSection>
                                  <Text style={headerTextStyle}>{itemName}</Text>
                              </CardSection>
                          </CardSection>
                      </View>
                </TouchableOpacity>
              </CardSection>
            </Card>
        </View>
    )
  }
}


const styles = {
  checkStyle: {
    justifyContent: 'center',
    flexDirection: 'column',

  },
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
    height: 80,
    width: 80
  }
};


const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(actionCreators, dispatch) }
}


export default connect(null, mapDispatchToProps)(CartListItem);
