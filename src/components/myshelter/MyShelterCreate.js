import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemUpdate, itemCreate, resetForm } from '../../actions';
import { Card, CardSection, Button } from '../common';
import MyShelterForm from './MyShelterForm';

class MyShelterCreate extends Component {
  componentWillMount() {
      // debugger;
      this.props.resetForm();
  }
  onButtonPress() {
    const { itemName, category, description, itemImageUrl } = this.props;
    this.props.itemCreate({ itemName, category, description, itemImageUrl: itemImageUrl || 'https://upload.wikimedia.org/wikipedia/en/b/b7/Nologo.png' });
  }

  render() {
    return (
      <Card>
        <MyShelterForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { _id, itemName, category, description, itemImageUrl  } = state.itemForm;
  return { _id, itemName, category, description, itemImageUrl  };
};

export default connect(mapStateToProps, {
  itemUpdate, itemCreate, resetForm
})(MyShelterCreate);
