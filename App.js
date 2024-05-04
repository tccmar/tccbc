import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import HomeScreen from './pages/HomeScreen';
import PagInicial from './pages/PagInicial';
import CadUser from './pages/CadUser';
import CadAluno from './pages/CadAluno';
import Login from './pages/Login';
import ContaResp from './pages/ContaResp';
import EditarContaResp from './pages/EditarContaResp';
import TodosCadAluno from './pages/TodosCadAluno';
import Camera from './pages/Camera';

// Cria os objetos de controle de navegação
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="PagInicial">
      <Stack.Screen name="" component={PagInicial} />
      <Stack.Screen
        name="CadUser"
        component={CadUser}
        options={{
          title: 'Faça seu cadastro',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
      <Stack.Screen
        name="PagInicial"
        component={PagInicial}
        options={{
          title: 'Início',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
      <Stack.Screen
        name="CadAluno"
        component={CadAluno}
        options={{
          title: 'Cadastro de Estudante',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Acesse sua conta',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
      <Stack.Screen
        name="ContaResp"
        component={ContaResp}
        options={{
          title: 'ContaResp',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
      <Stack.Screen
        name="EditarContaResp"
        component={EditarContaResp}
        options={{
          title: 'EditarContaResp',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
      <Stack.Screen
        name="TodosCadAluno"
        component={TodosCadAluno}
        options={{
          title: 'Alunos cadastrados',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          title: 'Camera',
          headerTitleStyle: { color: '#4F6D9A' },
          headerStyle: { backgroundColor: '#FBF9EC' },
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  // Assegure-se de ter um componente Pagina1 definido ou substitua por um existente.
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#00FFFF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      {/* <Stack.Screen name="Details" component={Pagina1} options={{ title: 'Details Page' }} /> */}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
