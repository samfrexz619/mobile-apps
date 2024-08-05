import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Todo } from '../types/todo';


interface Props {
  todo: Todo;
  pressHandler: (id: string) => void;
  pressEditHandler: (id: string) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  const { todo, pressHandler, pressEditHandler } = props;
  return (
    // <TouchableOpacity onPress={() => pressHandler(todo.id)}>
    //   <Text style={styles.item}>{todo.text}</Text>
    // </TouchableOpacity>
    <>
      <View style={styles.itemContainer}>
        <Text>
          {todo.text.length > 25 ? `${todo.text.slice(0, 25)}...` : todo.text}
        </Text>
        <View style={styles.itemBtns}>
          <Pressable style={styles.btn} onPress={() => pressHandler(todo.id)}>
            <Text style={styles.btnTxt}>del</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => pressEditHandler(todo.id)}>
            <Text style={styles.btnTxt}>edit</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemBtns: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  btnTxt: {
    padding: 5,
    color: '#f1f1f1',
    textTransform: 'capitalize'
  },
  btn: {
    backgroundColor: '#1c1c22',
    borderRadius: 7,
  }
})
export default TodoItem;
