import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import {Input, Card, CardSection, Button, Confirm} from '../common';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/CartActions'
import NavBar from '../navigation/NavBar';
import CartListItem from '../shoppingcart/CartListItem';
import Communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';





class Cart extends Component {
  constructor(props){
     super(props);
     this.state = { showModal: false };
     this.renderRow = this.renderRow.bind(this);
     this.onAccept = this.onAccept.bind(this);
     this.onDecline = this.onDecline.bind(this);
  }

  onAccept() {
    // Actions.ChatMain();
    this.setState({showModal: false});
    // Communications.web('https://www.google.com');
    // Communications.email(['wennieisnice@gmail.com'],
    //                      ['vincentwsql@gmail.com'],
    //                      null,
    //                      'Book Rental',
    //                      'Hi, I really like your books! Can I borrow?')
    //  console.log('email sent');

     Communications.text('3016554386',
                          'Hi, I really like your books! Can I borrow?')
      console.log('text sent');
  }

  onDecline() {
    this.setState({ showModal: false });
  }


  renderRow(item){
    // let {items} = this.props.cart;
    // const i = items.findIndex((cartItem)=> cartItem.id === item.id);
    return <CartListItem item={item}/>
  }


  render() {
    const {thumbnailContainerStyle, imageStyle, headerContentStyle, headerTextStyle} = styles;
    let {items} = this.props;
    // items.sort();
    let sortedDeals = items.sort((a,b) => {
      if (a._id < b._id) {
          return -1;
        }
        if (a._id > b._id) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    items = ds.cloneWithRows(sortedDeals);
    // console.log(this.props.cart.items);
    const selectedItems = this.props.items.filter(i=>i.isChecked == true);
    // console.log(this.props.items);
      return (
        <View>
              <ScrollView {...this.props}>
                <ListView
                  enableEmptySections={true}
                  keyboardShouldPersistTaps='always'
                  contentContainerStyle={styles.list}
                  dataSource={items}
                  renderRow={this.renderRow}
                />
              </ScrollView>
              <Card>
                <CardSection>
                  <Text style={headerTextStyle}>Selected Total: {selectedItems.length}</Text>
               </CardSection>
               <Confirm
                 visible={this.state.showModal}
                 onAccept={this.onAccept}
                 onDecline={this.onDecline}
               >
                Are you sure you want to email these items to the owner?
               </Confirm>
              </Card>



                  <View style={{paddingTop: 20}}>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}
                    buttonColor='green' textColor="white">
                       Email Owner
                    </Button>
                  </View>
        </View>
    );
  }
}

const styles = {
  list: {
      justifyContent: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
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
 // return { cart: state.cart };
 let items = state.cart.items;
   return {
     items
   }
};

const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, null)(Cart);
