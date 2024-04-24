import React from "react";
import { View, Text, StyleSheet } from "react-native";
function SinglePost() {
  return (
    <View style={styles.container}>
      <Text>heelo</Text>
    </View>
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
});
export default SinglePost;
