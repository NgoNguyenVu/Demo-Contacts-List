import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favourites';
import User from '../screens/User';
import Options from '../screens/Options';
import colors from '../utility/colors';
// import Login from '../screens/Login'; // Import Login screen
import EditProfile from '../screens/EditProfile';

// Stack Navigators
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const ContactsScreens = () => (
  <Stack.Navigator
    initialRouteName="Contacts"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
      headerTitleAlign: 'center',
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
  <Stack.Navigator
    initialRouteName="Favorites"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen
      name="Favorites"
      component={Favorites}
      options={{ title: 'Favorites' }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ title: 'Profile' }}
    />
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

const TabNavigation = () => (
  <Tab.Navigator
    initialRouteName="ContactsScreens"
    screenOptions={{
      tabBarStyle: { backgroundColor: colors.blue },
      tabBarActiveTintColor: colors.greyLight,
      tabBarInactiveTintColor: colors.greyDark,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="ContactsScreens"
      component={ContactsScreens}
      options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="list" size={26} color={color} />,
        tabBarLabel: 'Contacts',
      }}
    />
    <Tab.Screen
      name="FavoritesScreens"
      component={FavoritesScreens}
      options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="star" size={26} color={color} />,
        tabBarLabel: 'Favorites',
      }}
    />
    <Tab.Screen
      name="UserScreens"
      component={UserScreens}
      options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="person" size={26} color={color} />,
        tabBarLabel: 'User',
      }}
    />
    <Tab.Screen
      name="Options"
      component={Options}
      options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={26} color={color} />,
        tabBarLabel: 'Options',
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
