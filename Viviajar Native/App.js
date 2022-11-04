import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Passagens from './Pages/Passagens';
import Destinos from './Pages/Destinos';
import Clientes from './Pages/Clientes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Clientes" component={Clientes} />
        <Tab.Screen name="Passagens" component={Passagens} />
        <Tab.Screen name="Destinos" component={Destinos} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
