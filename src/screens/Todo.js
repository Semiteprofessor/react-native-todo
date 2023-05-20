/** @format */

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "Wake Up", id: 1 },
    { text: "Pray", id: 2 },
    { text: "Take shower", id: 3 },
    { text: "Dress Up", id: 4 },
    { text: "Take breakfast", id: 5 },
    { text: "Go to work", id: 6 },
    // { text: "Perform my duties", id: 7 },
    // { text: "Return home", id: 8 },
    // { text: "Rest", id: 9 },
    // { text: "Eat dinner", id: 10 },
    // { text: "Sleep", id: 11 },
  ]);

  const handleDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: text, id: Math.random().toString() },
      ]);
    } else {
      Alert.alert("Ooops... Todo must be at least 4 characters long");
    }

    text.length === 0 && Alert.alert("You must type something");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismised keyboard \u{2328}");
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handleDelete={handleDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  list: {
    // padding: 20,
    marginTop: 20,
    // backgroundColor: "coral",
    // color: "white",
    // fontSize: 24,
    // fontWeight: "bold",
  },
});
