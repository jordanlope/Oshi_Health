import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllSelfies from './Screens/AllSelfies';
import IconButton from './Components/UI/IconButton';
import ImagePicker from './Components/ImagePicker';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

const Stack = createNativeStackNavigator();

export default function App() {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPermission() {
    if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
  
      return permissionResponse.granted;
    }
  
    if(cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert(
        "Insufficent Permissions", 
        "Please grant camera permissions to use this app");
      return false;
    }
  
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if(!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
        allowsEditing: false,
        aspect: [16, 9],
        quality: 0.5,
        cameraType: 'front',
        mediaType: 'photo'
    });

    console.log(image);
}

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Selfies" 
            component={AllSelfies} 
            options={({ navigation }) => ({
              title: "Selfies",
              headerRight: ({tintColor}) => (
                <IconButton 
                  icon="camera" 
                  size={24} 
                  color={tintColor} 
                  onPress={takeImageHandler}
                /> //This should change to a screen
              )
            })}
          />
          <Stack.Screen 
            name="Selfie" 
            component={ImagePicker} 
            options={() => ({ // For example only
              title: "Selfie"
            })}/>
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}

