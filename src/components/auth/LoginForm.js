import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/AuthActions'


class LoginForm extends Component {
  constructor(props){
    super(props);


    this.onLoginButtonPress = this.onLoginButtonPress.bind(this);
    this.onSignOutUserButtonPress = this.onSignOutUserButtonPress.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.onRegisterButtonPress = this.onRegisterButtonPress.bind(this);

  }

  onLoginButtonPress() {
    const {email, password, error, user} = this.props;
    console.log({email, password, error, user});
    this.props.actions.loginUser(email, password);
    // Actions.UserPage({email: user.email})

  // Actions.OwnerProfileMain();

  }

  onRegisterButtonPress(){
  Actions.RegisterForm();
  }


  onSignOutUserButtonPress(){
    this.props.actions.signOutUser();

  }

  onEmailChange(text) {
    this.props.actions.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.actions.passwordChanged(text);
  }


  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <View>
        <Button  style={styles.buttonStyle} buttonColor='blue' textColor='white'
        onPress={this.onLoginButtonPress}>
          Login
        </Button>

        <Button  style={styles.buttonStyle} buttonColor='green' textColor='white'
        onPress={this.onRegisterButtonPress}>
          Register
        </Button>

        <Button  style={styles.buttonStyle} buttonColor='red' textColor='white'
        onPress={this.onSignOutUserButtonPress}>
          Logout
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
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
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


const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  // console.log(email, password, error, loading);
  return { email, password, error, loading };
};


const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(actionCreators, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
