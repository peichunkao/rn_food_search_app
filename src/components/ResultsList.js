import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import SearchDetails from "./SearchDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList
        data={results}
        horizontal={true}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ResultShow", {id: item.id})}>
              <SearchDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  container: {
    marginLeft: 15,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    marginTop: 5
  }
});

export default withNavigation(ResultsList);
