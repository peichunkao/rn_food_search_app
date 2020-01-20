import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{url: item}}/>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width:300,
    height:200,
    margin:5,
    borderRadius:15
  }, container: {
    marginLeft:15
  }, title:{
    fontWeight:"bold",
    fontSize: 18,
    color:"saddlebrown",
    marginTop: 15
  }
});

export default ResultsShowScreen;
