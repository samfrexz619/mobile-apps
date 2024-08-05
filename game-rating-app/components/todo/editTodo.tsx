import { Todo } from '../types/todo';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, Text, View } from 'react-native';

interface Props {
  initialText: string;
  saveEditedTodo: (item: Todo) => void;
  todoId: string;
}

const EditTodo: React.FC<Props> = ({ initialText, saveEditedTodo, todoId }) => {
  const [editText, setEditText] = useState(initialText)

  const updateTodo = () => {
    const editedTodo = {
      id: todoId,
      text: editText
    }
    saveEditedTodo(editedTodo)
  }
  return (
    <View>
      <TextInput value={editText} style={styles.input} onChangeText={(editText) => setEditText(editText)} />
      <Pressable onPress={updateTodo}>
        <Text>Update</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10
  },
})
export default EditTodo;
