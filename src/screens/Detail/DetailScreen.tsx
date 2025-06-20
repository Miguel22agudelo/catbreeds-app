import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Pantalla de Detalle 😺</Text>
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

export default DetailScreen;
