// React Native Navigation Drawer
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import  HomeScreen  from '../screens/HomeScreen';
import  SecondScreen  from '../screens/SecondScreen';
import  ThirdScreen from '../screens/ThirdScreen';

import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export function HomeScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home Page', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

export function SecondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondScreen"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          title: 'Second Screen', //Set Header Title
        }}/>
      <Stack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{
          title: 'Third Screen', //Set Header Title
        }}/>
    </Stack.Navigator>
  );
}