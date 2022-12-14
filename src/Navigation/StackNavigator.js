import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import MessageScreen from "../Screens/MessageSreen";
import OtpScreen from "../Screens/OtpScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import TaoNhom from "../Screens/TaoNhom";
import ChatNhom from "../Screens/ChatNhom";
import ProfileChatNhom from "../Screens/ProfileChatNhom";
import XemThanhVien from "../Screens/XemThanhVien";
import ThemThanhVien from "../Screens/ThemThanhVien";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        options={{ headerMode: 'none' }}
        name="LoginScreen" component={LoginScreen} />

      <Stack.Screen
        options={{ headerMode: 'none' }}
        name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen
        options={{ headerMode: 'none' }}
        name="OtpScreen" component={OtpScreen} />

      <Stack.Screen
        options={{ headerMode: 'none' }}
        name="MessageScreen" component={MessageScreen} />

      <Stack.Screen
        options={{ headerMode: 'none' }}
        name="BottomTabNavigator" component={BottomTabNavigator} />

      <Stack.Screen
        options={{ headerMode: 'none' }}
        name="TaoNhom" component={TaoNhom} />

      <Stack.Screen
        options={{ headerMode: 'none' }}
        name="XemThanhVien" component={XemThanhVien} />

<Stack.Screen
        options={{ headerMode: 'none' }}
        name="ThemThanhVien" component={ThemThanhVien} />

<Stack.Screen
        options={{ headerMode: 'none' }}
        name="ChatNhom" component={ChatNhom} />

<Stack.Screen
        options={{ headerMode: 'none' }}
        name="ProfileChatNhom" component={ProfileChatNhom} />

    </Stack.Navigator>
  )
}

export default StackNavigator

const style = StyleSheet.create({})