import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllSelfies from './Screens/AllSelfies';
import ImagePicker from './Components/ImagePicker';

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
            options={({ }) => ({
              title: "Selfies",
            })}
          />
          <Stack.Screen 
            name="Selfie" 
            component={ImagePicker} 
            options={() => ({
              title: "Selfie"
            })}/>
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}

