import SelfieList from "../Components/SelfieList"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Selfie } from "../models/selfie";
import IconButton from '../Components/UI/IconButton';
import { useState, useEffect, useLayoutEffect } from 'react';

export default function AllSelfies({navigation}) {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [selfies, setSelfies] = useState([]);
  const [cameraPermissions, setCameraPermissions] = useState()

  useEffect(() => {
    console.log("Fetched: " + selfies);
    setCameraPermissions(cameraPermissionInformation?.status);
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

  async function verifyPermission(permissionStatus) {
    if(permissionStatus === PermissionStatus.UNDETERMINED || permissionStatus === null) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
  
    if(permissionStatus === PermissionStatus.DENIED) {
      console.log("2");
      Alert(
        "Insufficent Permissions", 
        "Please grant camera permissions to use this app");
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission(cameraPermissions);

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
