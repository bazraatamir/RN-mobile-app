import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
function List({ todos }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: 100,
  },
});

export default List;
