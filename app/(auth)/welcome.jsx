import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

/**
 * Welcome component renders the welcome page with buttons to navigate to signup and login pages.
 */
const Welcome = () => {
  const router = useRouter(); // Get the router instance from expo-router

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Page</Text>
      <Button
        title="Go to Signup"
        onPress={() => router.push('/signUp')} // Navigate to the signup page
      />
      <Button
        title="Go to Login"
        onPress={() => router.push('/login')} // Navigate to the login page
      />
    </View>
  );
};

/**
 * Styles for the Welcome component.
 */
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

export default Welcome;