import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profie';
import { EventRegister } from 'react-native-event-listeners'
import React, {useState, useEffect } from 'react';
import theme from './theme/theme';
import themeContext from './theme/themeContext';
import { DefaultTheme } from 'react-native-paper';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listeners = EventRegister.addEventListener('ChangeTheme', (data) =>{
      setDarkMode(data)
      console.log(data)
  })
  return() => {
    EventRegister.removeAllListeners(listeners)
  }
}, [darkMode])

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}> 
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>

      </NavigationContainer>
    </themeContext.Provider>
  
  );
}

