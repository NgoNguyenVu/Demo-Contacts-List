import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider, useNavigationContext } from './components/NavigationContext';
import StackTabNavigator from './components/StackTabNavigator';
import DrawerNavigator from './components/DrawerNavigator';
import Login from './screens/Login'; // Import your Login screen

const AppContent = () => {
  const { useDrawer } = useNavigationContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  // Handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true); // Update login status
  };

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} /> // Render Login screen if not logged in
      ) : useDrawer ? (
        <DrawerNavigator />
      ) : (
        <StackTabNavigator />
      )}
    </NavigationContainer>
  );
};

const App = () => (
  <NavigationProvider>
    <AppContent />
  </NavigationProvider>
);

export default App;
