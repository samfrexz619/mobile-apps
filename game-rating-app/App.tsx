import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Header from './components/todo/header';
import TodoItem from './components/todo/todoItem';
import AddTodo from './components/todo/addTodo';

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

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitTodoHandler={submitTodoHandler} />
            <View style={styles.list}>
              <FlatList
                keyExtractor={(item) => item.id}
                data={todos} renderItem={({ item: todo }) => (
                  <TodoItem todo={todo} pressHandler={pressHandler} />
                )}
              />
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
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
