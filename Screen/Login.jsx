// LoginScreen.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" />
      <Button title="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default LoginScreen;
