import { ImageBackground, Text, View, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const numColumns = 2;
const { height, width } = Dimensions.get('window');

function SelfieItem({selfie, onSelect}) {

    return (
        <Pressable onPress={onSelect.bind(this, selfie.id)}>
            <View>
                <ImageBackground style={styles.image} blurRadius={4} source={{ uri: selfie.imageUri}}> 
                    <Text style={styles.imageText}>{selfie.getTime()}</Text> 
                    <Text style={styles.imageText}>{selfie.getDate()}</Text>                   
                </ImageBackground>
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
        shadowOpacity: .1,
        marginTop: 15,
        borderRadius: 15,
    },
    imageText: {
        color: "white",
        fontSize: 30,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
    },

});