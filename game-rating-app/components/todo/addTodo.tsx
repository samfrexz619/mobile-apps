import { Todo } from '../types/todo';
import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View, Pressable } from 'react-native';


interface Props {
  submitTodoHandler: (todo: string) => void;
}

const AddTodo: React.FC<Props> = ({ submitTodoHandler }) => {

  const [text, setText] = useState('');

  const changeHandler = (val: string) => {
    setText(val)
  }

  const submitHandler = (text: string) => {
    submitTodoHandler(text)
    setText('')
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <Pressable style={styles.btn} onPress={() => submitHandler(text)}>
        <Text style={styles.btnText}>Add Todo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  btn: {
    padding: 14,
    backgroundColor: '#1c1c22',
    borderRadius: 10
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
});

export default AddTodo;
