import SelfieList from "../Components/SelfieList"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Selfie } from "../models/selfie";
import { Alert, Button } from 'react-native';
import IconButton from '../Components/UI/IconButton';
import * as React from 'react';

export default function AllSelfies({navigation, data}) {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({tintColor}) => (
        <IconButton 
          icon="camera" 
          size={24} 
          color={tintColor} 
          onPress={takeImageHandler} />
      ),
    });
  }, [navigation]);

  async function verifyPermission() {
    if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      console.log("1");
      return permissionResponse.granted;
    }
  
    if(cameraPermissionInformation.status === PermissionStatus.DENIED) {
      console.log("2");
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
    
    await launchCameraAsync({
        allowsEditing: false,
        aspect: [16, 9],
        quality: 0.5,
        cameraType: 'front',
        mediaType: 'photo'
    }).then((value) => {
      saveSelfieHandler(value["uri"]);
    });
  }

  function saveSelfieHandler(uri) {
    const selfieData = new Selfie(uri);
    console.log(selfieData);
  }

  return (
    <SelfieList selfies={data}/>
  )
}
