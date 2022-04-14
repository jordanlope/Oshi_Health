import { FlatList, StyleSheet, View, Text, Dimensions } from "react-native";
import SelfieItem from "./SelfieItem";

const numColumns = 2;
function SelfieList({ selfies }) {

    if(!selfies || selfies.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No selfies added yet - start taking some! </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={selfies}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <SelfieItem selfie={item}/>}
                numColumns={numColumns}/>
        </View>
    )
}

export default SelfieList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16
    },
    container: {
        flex: 1,
        paddingTop: 40
    }
});