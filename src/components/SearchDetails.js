import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const SearchDetails = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{url: result.image_url}}></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.description}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width:200,
    height:120, 
    borderRadius:15,
    marginBottom:5
  },
  name: {
    fontSize:16,
    fontWeight:"bold"
  },
  container: {
    marginRight:20
  },
  description: {
    color: "silver",
    marginBottom: 5
  }
});

export default SearchDetails;
