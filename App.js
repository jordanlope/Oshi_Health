import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllSelfies from './Screens/AllSelfies';
import AddSelfie from './Screens/AddSelfie';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Selfies" component={AllSelfies} />
          <Stack.Screen name="Selfie" component={AddSelfie} />
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}
