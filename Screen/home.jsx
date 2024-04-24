import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import Hero from "../component/HeroImage";
import CategoryData from "../category.json";
import Cardcategory from "../component/categorycard";

function Home() {
  return (
    <View>
      <Hero />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CategoryData.map((el) => (
          <Cardcategory title={el.title} id={el.id} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;
