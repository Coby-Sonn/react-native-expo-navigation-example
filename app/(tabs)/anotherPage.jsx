import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

/**
 * AnotherPage component renders another page with a button to go to the welcome page, meaning this represents sign out functionality.
 */
const AnotherPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Another Page</Text>
      {/* The onPress handler below uses router.replace('/(auth)/welcome') to navigate to the welcome page and replace the current route. This is important because:
          Using replace instead of push ensures that the current 'anotherPage' page is removed from the navigation stack. 
          This prevents the user from being able to navigate back to this page using the back button, which is a common behavior after a successful logout.
          It provides a smoother (and more secure) user experience by preventing unnecessary navigation back to a post-auth page after logout. */}

      <Button
        title="Go to Welcome Page (like a signout button)"
        onPress={() => router.replace('/(auth)/welcome')}
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

export default AnotherPage;