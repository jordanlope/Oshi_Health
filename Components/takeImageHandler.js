import { launchCameraAsync } from 'expo-image-picker';


async function takeImageHandler() {
    const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
        cameraType: 'front',
        mediaType: 'photo'
    });
    console.log(image);
}

export default takeImageHandler;