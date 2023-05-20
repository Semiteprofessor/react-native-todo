/** @format */

import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Sandbox = () => {
  return (
    <View style={style.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "coral",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>Manchester United</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
    </View>
  );
};

export default Sandbox;

const style = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
  },
});
