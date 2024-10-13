import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen7a from './components/Screen7a'
import Screen7b from './components/Screen7b'; 
import Screen7c from './components/Screen7c'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Screen7a} />
        <Stack.Screen name="Screen7b" component={Screen7b} />
        <Stack.Screen name="AddJobScreen" component={Screen7c} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
