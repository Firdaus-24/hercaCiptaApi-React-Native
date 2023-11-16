import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import MarketingDetail from '../screen/MarketingDetail';
import Customer from '../screen/Customer';
import FormPembayaran from '../screen/FormPembayaran';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MarketingDetail" component={MarketingDetail} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="FormPembayaran" component={FormPembayaran} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
