// React Native Navigation Drawer
import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeScreenStack,
  SecondScreenStack,
} from './src/navigation/globalNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="HomeScreen"
          options={{
            drawerLabel: 'Home page Option',
            drawerIcon: config => <Ionicons name="home-outline" size={23} color="#900" />,
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SecondScreen"
          options={{drawerLabel: 'Second page Option',
          drawerIcon: config => <Ionicons name="home-outline" size={23} color="#900" />,}}
          component={SecondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
