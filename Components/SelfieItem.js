import { Image, Text, View, Pressable, StyleSheet } from 'react-native';

function SelfieItem({ selfie, onSelect}) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{uri: selfie.imageUri}}/>
            <View>
                <Text>{selfie.date}</Text>
                <Text>{selfie.time}</Text>
            </View>
        </Pressable>
    );
}

export default SelfieItem;

const styles = StyleSheet.create({

});