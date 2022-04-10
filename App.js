import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllSelfies from './Screens/AllSelfies';
import AddSelfie from './Screens/AddSelfie';
import IconButton from './Components/UI/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Selfies" 
            component={AllSelfies} 
            options={({ navigation }) => ({
              headerRight: ({tintColor}) => (
                <IconButton 
                  icon="camera" 
                  size={24} 
                  color={tintColor} 
                  onPress={() => navigation.navigate('Selfie')}/>
              )
            })} 
          />
          <Stack.Screen name="Selfie" component={AddSelfie} />
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}
