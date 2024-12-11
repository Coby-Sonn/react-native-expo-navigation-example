import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '../../components/tabBar';

/**
 * _layout component sets up the tab navigation layout.
 * It uses the Tabs component from expo-router to define the tab navigation structure.
 */
const _layout = () => {
  return (
    <Tabs
      initialRouteName="home" // Set the initial route to the home screen
      tabBar={props => <TabBar {...props} />} // Use the custom TabBar component
      backBehavior="history" // Define the back behavior for the tabs
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home", // Set the title for the home screen
          headerShown: false, // Hide the header for the home screen
          animation: 'fade', // Use fade animation for the home screen
        }}
      />
      
      {/* Another Page Screen */}
      <Tabs.Screen 
        name="anotherPage"
        options={{
          title: "Another Page", // Set the title for another page screen
          headerShown: false, // Hide the header for another page screen
          animation: 'fade', // Use fade animation for another page screen
        }}
      />
    </Tabs>
  );
};

export default _layout;
