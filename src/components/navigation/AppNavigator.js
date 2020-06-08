import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import Home from 'components/Home';
import NavigationConstants from 'components/navigation/NavigationConstants';
import Profile from 'components/Profile';
import iconForTab from 'helpers/TabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({ name, color }) => (
  <Image
    source={iconForTab(name)}
    style={{ tintColor: color }}
  />
);

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={NavigationConstants.home}
      component={Home}
    />
  </Stack.Navigator>
);

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={NavigationConstants.profile}
      component={Profile}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: props => TabIcon({ ...props, name }),
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
      }}
    >
      <>
        <Tab.Screen name={NavigationConstants.home} component={HomeNavigator} />
        <Tab.Screen name={NavigationConstants.profile} component={ProfileNavigator} />
      </>
    </Tab.Navigator>
  );
};

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default AppNavigator;
