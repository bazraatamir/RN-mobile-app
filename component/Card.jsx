import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const Card = ({ title, content, imageSource }) => {
  const { modalVisible, setModalVisible } = useState(false);
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("heelo");
          }}
        >
          <Pressable>
            <Icon name="heart" size={20} color="red" />
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Icon name="comment" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View>
          <Text>hello comment modal</Text>
        </View>
      </Modal>
    </View>
  );
};
//
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  textContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    position:"absolute"
  },
  content: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Card;
