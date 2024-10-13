import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const initialTasks = [
  { id: '1', title: 'To check email', completed: true },
  { id: '2', title: 'UI task web page', completed: true },
  { id: '3', title: 'Learn javascript basic', completed: true },
  { id: '4', title: 'Learn HTML Advance', completed: true },
  { id: '5', title: 'Medical App UI', completed: true },
  { id: '6', title: 'Learn Java', completed: true },
];

export default function Screen7b() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTaskTitle) => {
    const newTask = {
      id: (tasks.length + 1).toString(), 
      title: newTaskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.completed ? '✅' : '⬜'} {item.title}</Text>
      <TouchableOpacity>
        <FontAwesome name="edit" size={16} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>HiPhuong</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="search" size={16} color="gray" style={styles.icon} />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddJobScreen', { addTask })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fff',
  },
  textTop: {
    color: '#8353E2',
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    height: 40,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    height: '100%',
  },
  taskList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00BDD6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});
