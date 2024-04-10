
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDateToday } from './helpers/date-and-time';
import HomeScreen from './pages/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer style={{flex:1}}>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


