import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Image source={{ url: item.image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});
