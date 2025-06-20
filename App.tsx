import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
    return (
        <NavigationContainer>
            <NavigationStack />
        </NavigationContainer>
    );
}
