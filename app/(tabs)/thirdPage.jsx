import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

/**
 * ThirdPage component renders the third page with a button to open a modal.
 */
const ThirdPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third Page</Text>
      <Text style={styles.title}>This page can open a modal</Text>
      <Button
        title="Open Modal"
        onPress={() => router.push('/(modals)/exampleModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
});

export default ThirdPage;