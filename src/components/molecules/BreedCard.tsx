import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    breed: any;
    onPress: () => void;
}

const BreedCard = ({ breed, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            {breed.image?.url && (
                <Image source={{ uri: breed.image.url }} style={styles.image} />
            )}
            <View style={styles.info}>
                <Text style={styles.name}>{breed.name}</Text>
                <Text style={styles.text}>Origen: {breed.origin}</Text>
                <Text style={styles.text}>Inteligencia: {breed.intelligence}</Text>
                <Text style={styles.more}>Más...</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        margin: 10,
        borderRadius: 12,
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
    },
    info: {
        flex: 1,
        padding: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        fontSize: 14,
    },
    more: {
        marginTop: 5,
        color: '#0088cc',
        fontWeight: 'bold',
    },
});

export default React.memo(BreedCard);
