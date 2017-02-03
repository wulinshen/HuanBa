import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { ownerUpdate } from '../../actions';
import { CardSection, Input } from '../common';
import AddImageButton from '../blob/AddImageButton';


class OwnerProfileForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <AddImageButton />
        </CardSection>


        <CardSection>
          <Input
            label="Owner Name"
            /*
              placeholder="Gone With The Wind"
             */
            value={this.props.userName}
            onChangeText={value => this.props.ownerUpdate({ prop: 'userName', value })}
          />
        </CardSection>

      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { _id, userName, profileUrl } = state.ownerForm;
  // console.log({ _id, userName, profileUrl });
  return { _id, userName, profileUrl };
};

export default connect(mapStateToProps, { ownerUpdate })(OwnerProfileForm);
