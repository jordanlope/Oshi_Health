import { Alert, View, Button, StyleSheet } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

export default function ImagePicker() {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPermission() {
    if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if(cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
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
    <View style={styles.container}>
      <Button title="Take Image" onPress={takeImageHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      color: 'white',
    },
});