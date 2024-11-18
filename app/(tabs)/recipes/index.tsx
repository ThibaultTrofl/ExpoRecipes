import {View, Text, StyleSheet, TextInput, Button} from "react-native";


export default function HomePage() {

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Recipes Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap:5,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontSize: 20,
        fontWeight: 400,
    }
});
