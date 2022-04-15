import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
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
        <ScrollView>
            <Image style={styles.image} source={{uri: currentSelfie?.imageUri}}/>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{currentSelfie?.getTime()}</Text>
                <Text style={styles.time}>{currentSelfie?.getDate()}</Text>
            </View>
        </ScrollView>
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
        width: '100%'
    },
    timeContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
});