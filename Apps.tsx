import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import AppContainer from './src/screens/AppContainer';
import HistoryScreen from './src/screens/HistoryScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import App2 from './src/components/bottombar';
 
export type StackParam={
  profile: any;
  Home: any;
  Details: any;
};
 
 

// function  MyTab() {
//   return (
    
// <Tab.Navigator  initialRouteName="Home" >
// <Tab.Screen name="Home"  component={HomeScreen} />
// <Tab.Screen name="Profile" component={ProfileScreen}/>
// <Tab.Screen name="History" component={HistoryScreen} />
// </Tab.Navigator>
//   );
// }
 
export default function App() {
  return(
     <AppContainer/>
  );
}
