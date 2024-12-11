import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            gestureEnabled: false,
        }} >

            <Stack.Screen name="login" />
                        
            <Stack.Screen name="signUp" />
            
            <Stack.Screen name="welcome" />

        </Stack>

    );
}