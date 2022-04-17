import SelfieList from "../Components/SelfieList"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Selfie } from "../models/selfie";
import IconButton from '../Components/UI/IconButton';
import { useState, useEffect, useLayoutEffect } from 'react';

export default function AllSelfies({navigation}) {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [selfies, setSelfies] = useState([]);

  useEffect(() => {
    console.log("AllSelfies useeffect()");
    console.log("Fetched: " + selfies);
  }, [selfies]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({tintColor}) => (
        <IconButton 
          icon="funnel-outline" 
          size={24} 
          color={tintColor} 
          onPress={() => {
            console.log("Left Navigator Button clicked")
          }} />
      ),
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
    const permissionResponse = await requestPermission();
    // if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED || cameraPermissionInformation.status === null) {
    //   console.log("1");
    //   const permissionResponse = await requestPermission();
    //   return permissionResponse.granted;
    // }
    
    // if(cameraPermissionInformation.status === PermissionStatus.DENIED) {
    //   console.log("2");
    //   Alert(
    //     "Insufficent Permissions", 
    //     "Please grant camera permissions to use this app");
    //   return false;
    // }

    console.log(permissionResponse);
    console.log(cameraPermissionInformation);

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    console.log(hasPermission);
    if(!hasPermission) {
      console.log("Has no permission");
      return;
    }
    
    await launchCameraAsync({
        allowsEditing: false,
        aspect: [16, 9],
        quality: 0.5,
        cameraType: 'front',
        mediaType: 'photo'
    }).then((value) => {
      console.log("Uri value: " + value["uri"]);
      saveSelfieHandler(value["uri"]);
    });
  }

  const saveSelfieHandler = (uri) => {
    const selfieData = new Selfie(uri);

    setSelfies((selfies) => [
      selfieData,
      ...selfies
    ]);
  }

  return (
    <SelfieList selfies={selfies}/>
  )
}
