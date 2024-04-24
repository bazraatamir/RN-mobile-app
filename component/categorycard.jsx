import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const Cardcategory = ({ title, id }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("catrgoryDetails", { catrgorId: id })
        }
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
//
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    margin: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Cardcategory;
