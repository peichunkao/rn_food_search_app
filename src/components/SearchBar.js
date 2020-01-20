import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons/";

const SearchBar = ({term, onTermChange,onTermSubmit}) => {
  console.log(term)
  return (
    <View style={styles.searchBar}>
      <FontAwesome name="search" size={30} style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter a new restaruant."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,

  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 25,
    marginHorizontal: 10
  }
});

export default SearchBar;
