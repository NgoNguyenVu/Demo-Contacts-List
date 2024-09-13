import React, { useState, useEffect } from 'react'; // Import useState
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utility/colors';
import { fetchUserContact } from '../utility/api';
import { useNavigationContext } from '../components/NavigationContext';

const User = ({ navigation }) => {
  const { user, updateUser } = useNavigationContext(); // Access user and updateUser from context
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUserContact()
      .then((fetchedUser) => {
        updateUser(fetchedUser); // Update user in the context
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const { avatar, name, phone } = user;

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
          {/* <Button title="Update Profile" onPress={handleEditProfile} /> */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});

export default User;
