import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { items } from "../../../data/items";

export default function ItemsPage({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ url: item.image }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});
