import React, { Component } from 'react';
import {
  Text,
  ListView,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import OwnerProfileListItem from './OwnerProfileListItem';
import { Actions } from 'react-native-router-flux';
import NavBar from '../navigation/NavBar';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/OwnerActions'
import {Input, Card, CardSection, Button, Spinner} from '../common';



class OwnerProfileList extends Component {
  componentWillMount() {
    this.props.actions.ownerFetch();
    this.createDataSource(this.props);
    console.log(this.props.ownersData);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    // console.log(this.props.ownersData);
  }

  createDataSource({ ownersData }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(ownersData);
  }

  onAddItem(){
     Actions.MyShelterCreate({owner: this.props.owner});
  }

  renderSpinner(){
    // console.log(this.props.itemsData.isLoading);
    if (this.props.itemsData.isLoading){
    return (<Spinner size="large"/>);
    }
  }

  renderRow(owner){
    return <OwnerProfileListItem key={owner._id} owner={owner}/>
  }

      render() {
        return (
        <View>
                <ListView
                  enableEmptySections
                  contentContainerStyle={styles.list}
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />
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
  console.log(state.ownersData);
 return { ownersData: state.ownersData };
};

const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(actionCreators, dispatch) }
}




export default connect(mapStateToProps, mapDispatchToProps)(OwnerProfileList);
