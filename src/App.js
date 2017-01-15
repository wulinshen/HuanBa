import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import Tabs from 'react-native-tabs';





class App extends Component {
  render() {
    // const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));
   // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
