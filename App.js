import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import jsonData from "./card.json";
import Card from "./component/Card";
import Hero from "./component/HeroImage";
import LoginScreen from "./Screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTab from "./Navigate/homeStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOption={{headerShow:none}}>
        <Drawer.Screen name="Home"  component={HomeTab} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "red",
  },
});
