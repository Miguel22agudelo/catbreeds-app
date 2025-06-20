import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailItem from '../atoms/DetailItem';

interface Props {
    description: string;
    origin: string;
    intelligence: number;
    adaptability: number;
    lifeSpan: string;
}

const BreedDescriptionBlock = ({
    description,
    origin,
    intelligence,
    adaptability,
    lifeSpan,
}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <DetailItem label="🌍 Origen" value={origin} />
            <DetailItem label="🧠 Inteligencia" value={intelligence} />
            <DetailItem label="🌀 Adaptabilidad" value={adaptability} />
            <DetailItem label="⏳ Tiempo de vida" value={`${lifeSpan} years`} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 20,
        paddingHorizontal: 16,
        color: '#333',
        textAlign: 'justify',
    }

});

export default BreedDescriptionBlock;
