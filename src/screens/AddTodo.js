/** @format */

import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";

const AddTodo = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Enter Todo ..."
        onChangeText={(value) => setText(value)}
        style={{
          marginBottom: 10,
          borderBottomColor: "#c2c2c2",
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderBottomWidth: 2,
        }}
      />
      <TouchableOpacity
        onPress={() => handleSubmit(text)}
        style={{
          backgroundColor: "coral",
          padding: 15,
          borderRadius: 5,
          marginTop: 20,
        }}>
        <Text
          style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
