import React, {Component} from 'react';
// 组件
import {ReduxScreen} from "./app/views/bases/ReduxScreen";
import {HomeScreen} from "./app/views/Home/HomeScreen";
// navigation
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
const Stack = createStackNavigator();


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer initialRouteName={'HomeScreen'}>
        <Stack.Navigator>
          <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
          <Stack.Screen name={'ReduxScreen'} component={ReduxScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
