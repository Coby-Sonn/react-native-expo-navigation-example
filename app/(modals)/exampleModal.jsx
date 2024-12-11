import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * ExampleModal component renders a modal page with a button to close the modal.
 */
const ExampleModal = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a modal page</Text>
      <Button title="Close Modal" onPress={() => router.back()} />
    </View>
  );
};

/**
 * Styles for the ExampleModal component.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ExampleModal;