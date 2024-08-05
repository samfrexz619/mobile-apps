import React, { useRef } from 'react';
import { Text, StyleSheet, TextInput, View, Pressable } from 'react-native';


interface Props {
  submitTodoHandler: (todo: string) => void;
  changeHandler: (val: string) => void;
  text: string;
  editingId: string | null;
}

const AddTodo: React.FC<Props> = ({ submitTodoHandler, changeHandler, text, editingId }) => {


  const inputRef = useRef<TextInput>(null)

  const submitHandler = (text: string) => {
    submitTodoHandler(text)
    inputRef.current?.clear()
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        ref={inputRef}
        placeholder='new todo...'
        onChangeText={changeHandler}
        multiline
        editable={true}
        keyboardType='default'
        inputMode='text'
      />
      {!editingId ? <Pressable style={styles.btn} onPress={() => submitHandler(text)}>
        <Text style={styles.btnText}>Add Todo</Text>
      </Pressable>
        : (
          <Pressable style={styles.btn} onPress={() => submitHandler(text)}>
            <Text style={styles.btnText}>Update Todo</Text>
          </Pressable>
        )
      }
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
