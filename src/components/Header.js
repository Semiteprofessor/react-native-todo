/** @format */

import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ height: 80, paddingTop: 40, backgroundColor: "coral" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
          color: "#fff",
        }}>
        My Todos
      </Text>
    </View>
  );
};

export default Header;
