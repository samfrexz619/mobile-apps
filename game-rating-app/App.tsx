import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
} from 'react-native';
import Header from './components/todo/header';
import TodoItem from './components/todo/todoItem';
import AddTodo from './components/todo/addTodo';
import EditTodo from './components/todo/editTodo';
import { Todo } from './components/types/todo';

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'buy coffee',
      id: '1'
    },
    {
      text: 'continue duolingo streak',
      id: '2'
    },
    {
      text: 'coding practice',
      id: '3'
    },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState<string | null>('');

  const pressHandler = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const submitTodoHandler = (text: string) => {
    const newTodo = {
      text: text,
      id: Math.random().toString()
    }
    if (text.length > 3) {
      setTodos(prev => [newTodo, ...prev])
    } else {
      Alert.alert(
        'Ooops!',
        'Todo must be over 3 characters long',
        [{
          text: 'Understood',
          onPress: () => console.log('alert closed')
        }]
      )
    }
  }

  const changeHandler = (val: string) => {
    setText(val)
  }

  const pressEditHandler = (id: string) => {
    setEditingId(id)
  }

  const saveEditedTodo = (editTodo: Todo) => {
    const editedTodo = todos.map(todo => todo.id === editTodo.id ? {
      ...todo,
      text: editTodo.text
    } : todo)
    setTodos(editedTodo)
    setEditingId(null)
  }

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo
              submitTodoHandler={submitTodoHandler}
              changeHandler={changeHandler}
              text={text}
              editingId={editingId}
            />
            <View style={styles.list}>
              {todos.length > 0 ?
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={todos}
                  renderItem={({ item: todo }) => (
                    <>
                      {editingId === todo.id ?
                        (<EditTodo
                          initialText={todo.text}
                          todoId={todo.id}
                          saveEditedTodo={saveEditedTodo}
                        />)
                        :
                        <TodoItem
                          todo={todo}
                          pressHandler={pressHandler}
                          pressEditHandler={pressEditHandler}
                        />
                      }
                    </>
                  )}
                />
                : (
                  <View style={styles.empty}>
                    <Text style={styles.emptyTxt}>Todo is empty</Text>
                  </View>
                )
              }
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    // backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: '#f1f1f1'
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 30
  },
});
