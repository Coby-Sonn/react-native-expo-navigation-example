import React from 'react';
import { Stack } from 'expo-router';

/**
 * ModalLayout component sets up the stack navigation layout for modals.
 * It uses the Stack component from expo-router to define the modal navigation structure.
 */
export default function ModalLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide header for modals
        //gestureEnabled: false, // Uncomment to disable swipe gestures for dismissal
      }}
    >
      {/* Example Modal Screen */}
      <Stack.Screen
        name="exampleModal"
        options={{
          presentation: 'modal', // Make this screen appear as a modal
        }}
      />
    </Stack>
  );
}
