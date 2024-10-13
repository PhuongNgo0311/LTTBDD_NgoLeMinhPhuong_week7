import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from 'react-native';

export default function Test() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'check email1' },
    { id: 2, title: 'check email2' },
    { id: 3, title: 'check email3' },
  ]);

  const [title, setTitle] = useState('');

  const onAdd = () => {
    if (title.trim()) {
      const newTodo = {
        id: todos.length + 1,
        title: title,
      };
      setTodos([...todos, newTodo]);
      setTitle(''); 
    }
  };

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity onPress={onAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  deleteText: {
    color: '#fff',
  },
});
