import { SafeAreaView, ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

function SelfieDetails({route}) {
    const selectedSelfieId = route.params.selfieId;
    const data = route.params.data;
    const [currentSelfie, setCurrentSelfie] = useState();

    useEffect(() => {
        console.log("Selfie ID: " + selectedSelfieId);
        console.log("Data: " + data.length);
        const found = data.find(element => element.id === selectedSelfieId);
        setCurrentSelfie(found);
    }, [selectedSelfieId]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.timeContainer}>
                    <Image style={styles.image} source={{uri: currentSelfie?.imageUri}}/>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.dateText}>{currentSelfie?.getDate()}</Text>
                    <Text style={styles.timeText}>{currentSelfie?.getTime()}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SelfieDetails;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '80%',
        borderRadius: 15,
        
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    timeText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    dateText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    }
});