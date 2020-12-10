import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import SingleScreen from '../screens/Single';

import Header from '../components/Header';

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: () => <Header title="Home" />
      }
    },
    Single: {
      screen: SingleScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title={navigation.getParam('item').title} />
        }
      }
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#191919',
        height: 60
      }
    }
  }
)

export const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
      navigationOptions: {
        headerTitle: () => <Header title="About" />
      }
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#191919',
        height: 60
      }
    }
  }
)
