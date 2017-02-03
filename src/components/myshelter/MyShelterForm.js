import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { itemUpdate } from '../../actions';
import { CardSection, Input } from '../common';
import { Actions } from 'react-native-router-flux';
import AddImageButton from '../blob/AddImageButton';


class MyShelterForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <AddImageButton />
        </CardSection>


        <CardSection>
          <Input
            label="Item Name"
            /*
              placeholder="Gone With The Wind"
             */
            value={this.props.itemName}
            onChangeText={value => this.props.itemUpdate({ prop: 'itemName', value })}
          />
        </CardSection>


        <CardSection>
          <Input
            label="Category"
            /*
              placeholder="Book/TV/Music/Drama..."
             */
            value={this.props.category}
            onChangeText={value => this.props.itemUpdate({ prop: 'category', value })}
          />
        </CardSection>


        <CardSection>
          <Input
            label="Description"
            /*
              placeholder="Say something about it..."
             */
            value={this.props.description}
            onChangeText={value => this.props.itemUpdate({ prop: 'description', value })}
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
  const { itemName, category, description, itemImageUrl } = state.itemForm;

  return { itemName, category, description, itemImageUrl };
};

export default connect(mapStateToProps, { itemUpdate })(MyShelterForm);
