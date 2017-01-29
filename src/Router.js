import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux'
import Main from './components/Main';
import LookAroundMain from './components/lookaround/LookAroundMain';
import LookAroundList from './components/lookaround/LookAroundList';
import LookAroundListItem from './components/lookaround/LookAroundListItem';
import LookAroundListItemDetail from './components/lookaround/LookAroundListItemDetail';

import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';

import MyShelterList from './components/myshelter/MyShelterList';
import MyShelterCreate from './components/myshelter/MyShelterCreate';
import MyShelterEdit from './components/myshelter/MyShelterEdit';
import MyShelterListItemDetail from './components/myshelter/MyShelterListItemDetail';

import OwnerProfileMain from './components/owner/OwnerProfileMain';
import OwnerProfileList from './components/owner/OwnerProfileList';
import OwnerProfileCreate from './components/owner/OwnerProfileCreate';
import OwnerProfileEdit from './components/owner/OwnerProfileEdit';
import OwnerProfileListItemDetail from './components/owner/OwnerProfileListItemDetail';

import ChatMain from './components/chat/ChatMain';
import ShoppingCart from './components/shoppingcart/Cart';

import UploadFromCameraRoll from './components/blob/UploadFromCameraRoll';
import AddPicture from './components/blob/AddPicture';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
{/*
      <Scene key="welcome">
        <Scene key="Main" component={Main} title="Welcome"  />
      </Scene>

        <Scene key="auth">
          <Scene key="LoginForm" component={LoginForm} title="Login"  />
          <Scene key="RegisterForm" component={RegisterForm} title="Register"  />
        </Scene>

      <Scene key="auth">
        <Scene key="LoginForm" component={LoginForm} title="Login"  />
        <Scene key="RegisterForm" component={RegisterForm} title="Register"  />
      </Scene>
*/}
      <Scene key="lookaround">
        <Scene key="Main" component={Main} title="Welcome"  initial/>
        <Scene key="LoginForm" component={LoginForm} title="Login"  />
        <Scene key="RegisterForm" component={RegisterForm} title="Register"  />

        <Scene key="MyShelterList" component={MyShelterList} title="MyShelterList"  />
        <Scene key="MyShelterCreate" component={MyShelterCreate} title="MyShelterCreate"  />
        <Scene key="MyShelterEdit" component={MyShelterEdit} title="MyShelterEdit"  />
        <Scene key="MyShelterListItemDetail" component={MyShelterListItemDetail} title="Detail"  />

        <Scene key="OwnerProfileMain" component={OwnerProfileMain} title="OwnerProfileMain"  />
        <Scene key="OwnerProfileList" component={OwnerProfileList} title="OwnerProfileList"  />
        <Scene key="OwnerProfileCreate" component={OwnerProfileCreate} title="OwnerProfileCreate"  />
        <Scene key="OwnerProfileEdit" component={OwnerProfileEdit} title="OwnerProfileEdit"  />
        <Scene key="OwnerProfileListItemDetail" component={OwnerProfileListItemDetail} title="Detail"  />

        <Scene key="LookAroundMain" component={LookAroundMain} title="LookAroundMain"  />
        <Scene key="LookAroundList" component={LookAroundList} title="LookAroundList" />
        <Scene key="LookAroundListItem" component={LookAroundList} title="LookAroundListItem" />
        <Scene key="LookAroundListItemDetail" component={LookAroundListItemDetail} title="Detail" />

        <Scene key="ChatMain" component={ChatMain} title="ChatMain"  />
        <Scene key="ShoppingCart" component={ShoppingCart} title="ShoppingCart"  />

        <Scene key="UploadFromCameraRoll" component={UploadFromCameraRoll} title="UploadFromCameraRoll"  />
        <Scene key="AddPicture" component={AddPicture} title="AddPicture"  />
      </Scene>


    </Router>

  );
};

export default RouterComponent;
