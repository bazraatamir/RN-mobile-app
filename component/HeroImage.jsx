import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

function Hero() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.image}
      />
    </View>
  );
}

export default Hero;
const windowWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height:200,

    overflow: "hiden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
});
