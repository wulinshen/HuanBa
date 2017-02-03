import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import MyShelterForm from './MyShelterForm';
import { itemUpdate, itemSave, itemDelete, resetForm } from '../../actions';
import { Card, CardSection, Button, Confirm } from '../common';

class MyShelterEdit extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false };
    this.onUpdateButtonPress = this.onUpdateButtonPress.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
  }

  componentWillMount() {
    _.each(this.props.item, (value, prop) => {
      this.props.itemUpdate({ prop, value });
    });
  }

  componentWillUnMount() {
      // debugger;
      this.props.resetForm();
  }

  onUpdateButtonPress() {
    const { _id, itemName, category, description, itemImageUrl } = this.props;
    // console.log(_id, itemName, category, description, itemImageUrl);
    // debugger;
    this.props.itemSave({ _id, itemName, category, description, itemImageUrl: itemImageUrl || 'https://upload.wikimedia.org/wikipedia/en/b/b7/Nologo.png'  });
  }


  onAccept() {
   const { _id, itemImageUrl } = this.props.item;
   this.props.itemDelete({ _id, itemImageUrl });
 }

  onDecline() {
   this.setState({ showModal: false });
 }



  render() {
    return (
  <View>
      <Card>
        <MyShelterForm />

        <CardSection>
          <Button onPress={this.onUpdateButtonPress}>
            Save Changes
          </Button>
        </CardSection>


        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Remove Item
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
         Are you sure you want to remove this item?
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

const mapStateToProps = (state) => {
  const { _id, itemName, category, description, itemImageUrl } = state.itemForm;
  // console.log( _id, itemName, category, description, itemImageUrl );
  // debugger;
  return { _id, itemName, category, description, itemImageUrl };
};

export default connect(mapStateToProps, {
  itemUpdate, itemSave, itemDelete, resetForm
})(MyShelterEdit);
