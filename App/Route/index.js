import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

//screen
import HomeScreen from '../Container/HomeScreen'
import AboutScreen from '../Container/AboutScreen'
import CustomDrawer from './Drawer'
import NewsDetailScreen from '../Container/NewsDetailScreen'
import SportScreen from '../Container/SportScreen'
import TechnologyScreen from '../Container/TechnologyScreen'
import LeadershipScreen from '../Container/LeadershipScreen'
import SearchScreen from '../Container/SearchScreen'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
      <Stack.Screen name="Sport" component={SportScreen} />
      <Stack.Screen name="Technology" component={TechnologyScreen} />
      <Stack.Screen name="Leadership" component={LeadershipScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

//drawer
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // drawerContent={(props) => <CustomDrawer {...props} />}
        drawerType={'front'}
        drawerStyle={{ width: '90%' }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen  name="Root" component={Root} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

  // export default function App() {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator headerMode="none" initialRouteName="Home">
  //           <Stack.Screen name="Home" component={HomeScreen} />
  //           <Stack.Screen name="Root" component={DrawerNav} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }