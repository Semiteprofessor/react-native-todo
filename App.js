/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./src/screens/Todo";
import TodoItem from "./src/screens/TodoItem";
import AddTodo from "./src/screens/AddTodo";
import Sandbox from "./src/screens/Sandbox";

export default function App() {
  return (
    <View>
      <Todo />
    </View>
  );
}
