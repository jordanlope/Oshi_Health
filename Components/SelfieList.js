import { FlatList, StyleSheet } from "react-native";
import SelfieItem from "./SelfieItem";

function SelfieList({ selfies }) {
    if(!selfies || selfies.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No selfies added yet - start taking some! </Text>
            </View>
        );
    }

    return (
        <FlatList 
            data={selfies}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <SelfieItem selfie={item}/>}/>
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
    }
});