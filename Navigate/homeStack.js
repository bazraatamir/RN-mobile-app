import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/home";
import SinglePost from "../Screen/singPost";
import CategoryDetails from "../component/catrgoryDetails";
const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="Single" component={SinglePost} />
    </Stack.Navigator>
  );
}
