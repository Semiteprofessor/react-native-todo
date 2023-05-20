/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ item, handleDelete }) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.id)}>
      <View
        style={{
          padding: 16,
          marginTop: 16,
          borderColor: "coral",
          borderWidth: 1,
          borderStyle: "dashed",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text>{item.text}</Text>
        <AntDesign name="delete" color="coral" size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
