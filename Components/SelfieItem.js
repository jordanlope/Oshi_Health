import { Image, Text, View, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const numColumns = 2;
const { height, width } = Dimensions.get('window');
function SelfieItem({ selfie}) {

    return (
        <Pressable >
            <View>
                <Image style={styles.image} source={{ uri: selfie.imageUri}}/>
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
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 3,
        flex: 1,
        margin: 1,
        width: width / numColumns,
        shadowOpacity: .1
    },
    itemText: {

    },

});