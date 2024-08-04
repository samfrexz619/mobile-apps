import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Todo } from '../types/todo';


interface Props {
  todo: Todo;
  pressHandler: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(todo.id)}>
      <Text style={styles.item}>{todo.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})
export default TodoItem;
