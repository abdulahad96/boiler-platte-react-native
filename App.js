/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Navigation from './src/navigator';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import Store from './src/redux/store';

const store = Store();
const App: () => React$Node = () => {
  return (
    <>
    <Provider store={store}>
    <Navigation />
  </Provider>
  </>
    );
};



export default App;
