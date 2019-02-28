import React from 'react';
import{Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer } from "react-navigation";

import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import Screen3 from "./screens/screen3";

const TabNavigator = createBottomTabNavigator({
  Home: {screen: Screen1 },
  Shopping: {screen: Screen2 },
  Cart: {screen: Screen3 },
},
{
  tabBarPositon:'Bottom',
  animationEnabled:true,
  fontSize:30,
  tabBarOptions:{
    activeTintColor:"#e91e63",
  }
});

export default createAppContainer(TabNavigator);
