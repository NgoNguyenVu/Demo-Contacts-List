import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favourites';
import User from '../screens/User';
import Options from '../screens/Options';
import colors from '../utility/colors';
import EditProfile from '../screens/EditProfile';

// Stack navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const getDrawerItemIcon = (icon) => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);

const ContactsScreens = () => (
  <Stack.Navigator
    initialRouteName="Contacts"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
      headerTitleAlign: 'center',
      headerShown: false,
    }}
  >
    <Stack.Screen name="Contacts" component={Contacts} options={{ title: 'Contacts' }} />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ route }) => {
        const { contact } = route.params;
        const { name } = contact;
        return {
          title: name.split(' ')[0],
          headerTintColor: 'white',
          headerStyle: { backgroundColor: colors.blue },
        };
      }}
    />
  </Stack.Navigator>
);

const FavoritesScreens = () => (
  <Stack.Navigator initialRouteName="Favorites" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favorites' }} />
    <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
  </Stack.Navigator>
);

const UserScreens = ({ navigation }) => (
  <Stack.Navigator initialRouteName="User">
    <Stack.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        headerTitle: 'Me',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.blue },
        headerRight: () => (
          <MaterialIcons
            name="edit"
            size={24}
            color="white"
            style={{ marginRight: 15 }}
            onPress={() => {
              navigation.navigate('EditProfile'); // Navigate to EditProfile screen
            }}
          />
        ),
      })}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        headerTitle: 'Edit Profile',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.blue },
      }}
    />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="ContactsScreens">
    <Drawer.Screen
      name="ContactsScreens"
      component={ContactsScreens}
      options={{ drawerIcon: getDrawerItemIcon('list') }}
    />
    <Drawer.Screen
      name="FavoritesScreens"
      component={FavoritesScreens}
      options={{ drawerIcon: getDrawerItemIcon('star') }}
    />
    <Drawer.Screen
      name="UserScreens"
      component={UserScreens}
      options={{ drawerIcon: getDrawerItemIcon('person') }}
    />
    <Drawer.Screen
      name="Options"
      component={Options}  // Directly pass the component
      options={{ drawerIcon: getDrawerItemIcon('settings') }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
