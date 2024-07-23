// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import StackScreen from './src/components/stack/Stack';
import './gesture-handler';

enableScreens();

function App(): React.JSX.Element {
  return <StackScreen />;
}

export default App;
