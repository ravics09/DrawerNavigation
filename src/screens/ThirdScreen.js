// React Native Navigation Drawer
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const ThirdScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is the HomeScreen under HomeScreen Option
          </Text>
          <Button
            onPress={
              () => navigation.navigate('HomeScreen')
            }
            title="Go to Home Screen"
          />
          <Button
            onPress={
              () => navigation.navigate('SecondScreen')
            }
            title="Go to Second Screen"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ThirdScreen;