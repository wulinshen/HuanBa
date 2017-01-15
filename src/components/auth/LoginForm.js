import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';


class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
    loading: false,
    email: '',
    password: ''
    };

    this.onLoginButtonPress = this.onLoginButtonPress.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.onRegisterButtonPress = this.onRegisterButtonPress.bind(this);

  }

  onLoginButtonPress() {
  Actions.OwnerProfileMain({type: 'reset'});
  }

  onRegisterButtonPress(){
  Actions.RegisterForm();
  }

  onEmailChange(text) {
    this.setState({email: text});
  }

  onPasswordChange(text) {
    this.setState({password: text});
  }


  renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return (
      <View>
        <Button  style={styles.buttonStyle} buttonColor='blue' textColor='white'
        onPress={this.onLoginButtonPress}>
          Login
        </Button>

        <Button  style={styles.buttonStyle} buttonColor='red' textColor='white'
        onPress={this.onRegisterButtonPress}>
          Register
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection >
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },

  buttonStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  }
};


export default LoginForm;
