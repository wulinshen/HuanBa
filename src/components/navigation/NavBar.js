import React, { Component } from 'react';
import {
  Text,
  View,
  TabBarIOS,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Cart from '../shoppingcart/Cart';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';




class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       selectedTab:'home'
    };
  }

  renderCart = () => {
    return (
      <View />
    );
  };

  render() {
    const itemCount = this.props.cart.items.length;
    // console.log(this.props.cart.items.length);
    return (
      <TabBarIOS
        style={{paddingTop:45}}
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">

        <Icon.TabBarItemIOS
        iconName="home"
          title="Home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
            Actions.pop();
          }}>
          {this.renderCart()}
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
        iconName="shopping-cart"
          title="  Cart"
          badge={itemCount}
          selected={this.state.selectedTab === 'cart'}
          onPress={() => {
            this.setState({
              selectedTab: 'cart',
            });
            Actions.ShoppingCart();
          }}>
          {this.renderCart()}
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    alignItems: 'center',
    position: 'absolute'
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

const mapStateToProps = state => {
 // console.log(state.cart);
 return { cart: state.cart };
};

export default connect(mapStateToProps, null)(NavBar);
