import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/AuthActions'


class RegisterForm extends Component {
  constructor(props){
    super(props);

    this.state = {
    password_error:'',
    reenter_password: ''
    };

    this.onRegisterButtonPress = this.onRegisterButtonPress.bind(this);
    this.onSignOutUserButtonPress = this.onSignOutUserButtonPress.bind(this);
    // this.onGetUserButtonPress = this.onGetUserButtonPress.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onReEnterPasswordChange = this.onReEnterPasswordChange.bind(this);
    this.renderButton = this.renderButton.bind(this);

  }

  onRegisterButtonPress() {
    const { email, password } = this.props;
    console.log(email, password);

    if (this.props.password == this.state.reenter_password){
    this.props.actions.registerUser(this.state.email, this.state.password);
    Actions.LookAroundMain();
    }
    else {
      this.setState({password_error:'Passwords Do Not Match'});
    }
  }

  // onGetUserButtonPress(){
  //   this.props.actions.getLoginUser()
  //                     .then(user => console.log(user))
  //                     .catch(error => console.log(error));
  //
  // }


  onSignOutUserButtonPress(){
    this.props.actions.signOutUser();

  }

  onEmailChange(text) {
    this.props.actions.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.actions.passwordChanged(text);
  }

  onReEnterPasswordChange(text) {
    this.setState({reenter_password: text});
  }


  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <View>
        <Button  style={styles.buttonStyle} buttonColor='blue' textColor='white'
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

        <CardSection>
          <Input
            secureTextEntry
            label="Confirm Password"
            placeholder="Same password"
            onChangeText={this.onReEnterPasswordChange}
            value={this.state.reenter_password}
          />
        </CardSection>


        <Text style={styles.errorTextStyle}>
          {this.state.password_error}
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
  return { email, password, error, loading };
};

const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(actionCreators, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
