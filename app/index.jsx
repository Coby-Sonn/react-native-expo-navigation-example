import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Welcome Page"
                onPress={() => router.push('/(auth)/welcome')}
            />
        </View>
    );
};

export default HomeScreen;