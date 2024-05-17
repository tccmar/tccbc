import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import 'react-native-gesture-handler';

import Home from './pages/home/'
import Login from './pages/login/'
import SingUp from './pages/singup/';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{title:'Acessar sua conta', headerTintColor: '#2ecffb'}}/>
        <Stack.Screen name="SingUp" component={SingUp} options={{ title:'Cadastro de Gestão', headerTintColor: '#2ecffb'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
