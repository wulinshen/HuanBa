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
import OwnerProfileForm from './OwnerProfileForm';
import { ownerUpdate, ownerSave, ownerDelete, resetOwnerForm } from '../../actions';
import { Card, CardSection, Button, Confirm } from '../common';

class OwnerProfileEdit extends Component {
  constructor(props){
    super(props);
    this.onUpdateButtonPress = this.onUpdateButtonPress.bind(this);
  }

  componentWillMount() {
    _.each(this.props.item, (value, prop) => {
      this.props.ownerUpdate({ prop, value });
    });
  }

  componentWillUnMount() {
      // debugger;
      this.props.resetOwnerForm();
  }

  onUpdateButtonPress() {
    const { _id, userName, profileUrl } = this.props;
    // console.log(_id, userName, profileUrl);
    // debugger;
    this.props.ownerSave({ userName, profileUrl });
  }



  render() {
    return (
  <View>
      <Card>
        <OwnerProfileForm />

        <CardSection>
          <Button onPress={this.onUpdateButtonPress}>
            Save Changes
          </Button>
        </CardSection>
      </Card>

      <View style={{paddingTop: 20}}>
        <Button
        buttonColor='green' textColor="white">
           Email Owner
        </Button>
      </View>
  </View>

    );
  }
}

const mapStateToProps = (state) => {
  const { _id, userName, profileUrl } = state.ownerForm;
  // console.log( _id, userName, profileUrl );
  // debugger;
  return { _id, userName, profileUrl };
};

export default connect(mapStateToProps, {
  ownerUpdate, ownerSave, ownerDelete, resetOwnerForm
})(OwnerProfileEdit);
