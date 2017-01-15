import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, buttonColor='', textColor='' }) => {
  const { buttonStyle, textStyle } = styles;
  // console.log(buttonColor, textColor);

  return (
    <TouchableOpacity onPress={onPress}  style={[buttonStyle, {backgroundColor: `${buttonColor}` || 'purple'}]}>
      <Text style={[textStyle, {color: `${textColor}` || 'blue'}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
