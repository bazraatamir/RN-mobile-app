import React from "react";
import { View, Text } from "react-native";

function CategoryDetails({ route }) {
  const { CategoryId } = route.params;
  return (
    <View>
      <Text>{CategoryId}</Text>
    </View>
  );
}

export default CategoryDetails;
