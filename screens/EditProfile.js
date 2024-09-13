import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigationContext } from '../components/NavigationContext';

const EditProfile = ({ navigation }) => {
  const { user, updateUser } = useNavigationContext(); // Access user and updateUser from context
  const [updatedName, setUpdatedName] = useState(user.name);
  const [updatedPhone, setUpdatedPhone] = useState(user.phone);

  const handleSave = () => {
    updateUser({ name: updatedName, phone: updatedPhone });
    navigation.goBack(); // Navigate back to the User screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={updatedName}
        onChangeText={setUpdatedName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={updatedPhone}
        onChangeText={setUpdatedPhone}
        placeholder="Phone"
        keyboardType="phone-pad"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default EditProfile;
