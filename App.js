import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListarContactos from "./ListarContactos";
import AddContact from "./AddContact";

export default function App() {
  return (
    <View style={styles.container}>
      <ListarContactos />
      <AddContact />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
