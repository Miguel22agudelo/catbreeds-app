import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LandingScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Pantalla de Landing 🐾</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default LandingScreen;
