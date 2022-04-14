import { Image, Text, View, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const numColumns = 2;
const { width } = Dimensions.get('window');
function SelfieItem({ selfie, onSelect}) {


    return (
        <Pressable onPress={onSelect}>
            <View style={styles.itemStyle}>
                <Image key={selfie.id} source={{uri: selfie.imageUri}}/>
                <Text>{selfie.date}</Text>
                <Text>{selfie.time}</Text>
            </View>
        </Pressable>
    );
}

export default SelfieItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: Colors.primary500,
        elevation: 2,
        borderRadius: 4,
    },
    pressed: {

    },
    image: {
        flex: 1
    },
    itemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        flex: 1,
        margin: 1,
        height: width / numColumns
    },
    itemText: {

    },

});