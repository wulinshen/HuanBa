import React, { Component } from 'react';
import {
  Text,
  ListView,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import MyShelterListItem from './MyShelterListItem';
import { Actions } from 'react-native-router-flux';
import Cart from '../shoppingcart/Cart';
import NavBar from '../navigation/NavBar';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/ItemActions'
import {Input, Card, CardSection, Button} from '../common';




class MyShelterList extends Component {
  componentWillMount() {
    this.props.actions.itemsFetch();
    this.createDataSource(this.props);
    // console.log(this.props.itemsData);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    // console.log(this.props.itemsData);
  }

  createDataSource({ itemsData }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(itemsData);
  }

  onAddItem(){
     Actions.MyShelterCreate({item: this.props.item});
  }

  renderRow(item){
    return <MyShelterListItem key={item._id} item={item}/>
  }

      render() {
        return (
        <View>
                <Button onPress={this.onAddItem.bind(this)} buttonColor='green' textColor="white" >
                  Add
                </Button>
                <ListView
                  enableEmptySections
                  contentContainerStyle={styles.list}
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />
              <View>
                <NavBar />
              </View>
        </View>

        );
      }



}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap'
    }
});


const mapStateToProps = state => {
 // console.log(state.itemsData);
 return { itemsData: state.itemsData };
};

const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(actionCreators, dispatch) }
}




export default connect(mapStateToProps, mapDispatchToProps)(MyShelterList);
