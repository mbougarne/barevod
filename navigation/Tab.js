import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeStack, AboutStack } from './Stack';

const Tab = createBottomTabNavigator({
  Home: HomeStack,
  About: AboutStack,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
      const { routeName } = navigation.state;
      let iconName = (routeName === 'Home') ? 'home' : 'short-text';
      return <Icon name={iconName} size={30} color="#ea1c2d" />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#ea1c2d',
    inactiveTintColor: '#222',
  },
});

export default createAppContainer(Tab);
