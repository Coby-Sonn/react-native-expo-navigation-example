import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

/**
 * Login component renders the login page with a button to navigate to the home page upon successful login.
 */
const Login = () => {
  const router = useRouter(); // Get the router instance from expo-router

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      {/* The onPress handler below uses router.replace('/(tabs)/home') to navigate to the home page and replace the current route. This is important because:
          Using replace instead of push ensures that the login page is removed from the navigation stack. This prevents the user from being able to navigate back to the login page using the back button, which is a common behavior after a successful login.
          It provides a smoother user experience by preventing unnecessary navigation back to the login page. */}
      <Button
        title="Login Successfully (based on successful login process)"
        onPress={() => router.replace('/(tabs)/home')} // Navigate to the home page and replace the current route
      />
    </View>
  );
};

/**
 * Styles for the Login component.
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

export default Login;