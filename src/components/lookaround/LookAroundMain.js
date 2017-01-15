import React, { Component } from 'react';
import {
  Text,
  View,
  Picker,
  TouchableOpacity
} from 'react-native';
import {Input, Card, CardSection, Button} from '../common';
import { Actions } from 'react-native-router-flux';



class LookAroundMain extends Component {

  navigateToNext(){
    Actions.LookAroundList();
  }


  render() {
    return (
      <View>
        <Card>
              <CardSection>
              <Input
               placeholder="Search..."
              />
              </CardSection>

              <CardSection style={{ flexDirection: 'column' }}>
              <TouchableOpacity onPress={this.navigateToNext}>
                <Text style={styles.pickerTextStyle}>Filter</Text>
                  <Picker style={{ flex: 1 }} >
                    <Picker.Item label="near_to_far" value="From Nearest to Farthest" />
                    <Picker.Item label="far_to_near" value="From Farthest to Nearest" />
                    <Picker.Item label="popular" value="Most Active" />
                    <Picker.Item label="best" value="Best Review" />
                  </Picker>
              </TouchableOpacity>
            </CardSection>
        </Card>
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

export default LookAroundMain;
