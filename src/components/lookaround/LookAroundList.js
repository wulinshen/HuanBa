import React, { Component } from 'react';
import {
  Text,
  ListView,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import LookAroundListItem from './LookAroundListItem';
import { Actions } from 'react-native-router-flux';
import Cart from '../shoppingcart/Cart';
import NavBar from '../navigation/NavBar';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/ItemActions'
import {Input, Card, CardSection, Button, Spinner} from '../common';




class LookAroundList extends Component {

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

  renderSpinner(){
    // console.log(this.props.itemsData.isLoading);
    if (this.props.itemsData.isLoading){
    return (<Spinner size="large"/>);
    }
  }

  renderRow(item){
    return <LookAroundListItem item={item}/>
  }

      render() {
        return (
      <View>
        <View>
         <NavBar />
        </View>

        <ScrollView contentContainerStyle={styles.list}>
                <ListView
                  enableEmptySections
                  keyboardShouldPersistTaps='always'
                  contentContainerStyle={styles.list}
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />
        </ScrollView>
                <CardSection>
                  {this.renderSpinner()}
                </CardSection>
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




export default connect(mapStateToProps, mapDispatchToProps)(LookAroundList);
