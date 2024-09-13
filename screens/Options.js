import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigationContext } from '../components/NavigationContext'; 
import DetailListItem from '../components/DetailListItem';
import Login from './Login'; // Import component Login

const Options = () => {
  const [signedOut, setSignedOut] = useState(false);
  const { toggleNavigation, useDrawer } = useNavigationContext(); 

  const handleLogin = () => {
    setSignedOut(false);
  };

  if (signedOut) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <View style={[styles.container, useDrawer && styles.drawerContainer]}>
      <DetailListItem title="Update software" />
      <TouchableOpacity onPress={toggleNavigation}>
        <DetailListItem title="Switch Navigation" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSignedOut(true)}>
        <DetailListItem title="Sign Out" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30, 
  },
});

export default Options;
