import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Screen7c({ navigation, route }) {
  const [job, setJob] = useState('');
  const { addTask } = route.params; 

  const handleFinish = () => {
    if (job.trim()) { 
      addTask(job); 
      navigation.goBack(); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Hi Phuong</Text>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Input your job"
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTop: {
    color: '#8353E2',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    width: '100%',
    marginBottom: 16,
  },
  finishButton: {
    backgroundColor: '#00BDD6',
    padding: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
