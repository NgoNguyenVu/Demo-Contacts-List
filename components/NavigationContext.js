import React, { createContext, useState, useContext } from 'react';

// Create the context for navigation and user management
const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [useDrawer, setUseDrawer] = useState(false);
  const [user, setUser] = useState({}); // Add user state

  // Function to toggle between Drawer and Stack navigation
  const toggleNavigation = () => {
    setUseDrawer(prev => !prev);
  };

  // Function to update user profile
  const updateUser = (updatedUser) => {
    setUser(prev => ({ ...prev, ...updatedUser }));
  };

  return (
    <NavigationContext.Provider value={{ useDrawer, toggleNavigation, user, updateUser }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Hook to use the NavigationContext in components
export const useNavigationContext = () => useContext(NavigationContext);
