import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
});