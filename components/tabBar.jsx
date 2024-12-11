import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Icon from '../assets/icons';

const { height } = Dimensions.get('window');

// Helper function to calculate height percentage
const hp = (percentage) => {
  return (height * percentage) / 100;
};

/**
 * TabBar component renders a custom tab bar for navigation.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.state - The navigation state object.
 * @param {Array} props.state.routes - The array of route objects.
 * @param {number} props.state.index - The index of the currently focused route.
 * @param {Object} props.descriptors - The descriptors for the routes.
 * @param {Object} props.navigation - The navigation object.
 * @param {Function} props.navigation.emit - Function to emit navigation events.
 * @param {Function} props.navigation.navigate - Function to navigate to a route.
 *
 * @returns {JSX.Element} The rendered TabBar component.
 */
const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    home: (props) => <Icon name="home" size={hp(2.5)} color={'black'} {...props} />,
    anotherPage: (props) => <Icon name="heart" size={hp(2.5)} color={'black'} {...props} />,
    thirdPage: (props) => <Icon name="camera" size={hp(2.5)} color={'black'} {...props} />,
  };

  return (
    <View style={styles.tabbarContainer}>
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tab}
            >
              {icons[route.name] && icons[route.name]({ focused: isFocused })}
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 'auto',
    height: 100,
    backgroundColor: '#fff',
  },
  tabbar: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;