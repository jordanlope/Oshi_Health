import { ScrollView, Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from 'react';

function SelfieForm() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(enteredTitle) {
        console.log("Live: ", enteredTitle)
        setEnteredTitle(enteredTitle);
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}/>
            </View>
        </ScrollView>
    )
}

export default SelfieForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomWidth: 2
    }
});