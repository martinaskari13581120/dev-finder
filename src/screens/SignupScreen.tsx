import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';

import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const navigation = useNavigation<any>();
  const { addUser } = useContext(UsersContext);

  const handleSignup = async () => {
    if (!username.trim()) {
      Alert.alert(
        'Missing Username',
        'Please enter a GitHub username'
      );
      return;
    }

    try {
      await axios.get(
  `https://api.github.com/users/${username}`
);

addUser({
  id: Date.now(),
  login: username,
});

navigation.navigate('Map');
    } catch (error) {
      Alert.alert(
        'User Not Found',
        'GitHub user does not exist'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Dev Finder</Text>

      <Text style={styles.title}>
        Find developers near you
      </Text>

      <AppInput
        placeholder="GitHub Username"
        value={username}
        onChangeText={setUsername}
      />

      <AppButton
        title="Sign Up"
        onPress={handleSignup}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },

  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2563eb',
  },

  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#444',
  },
});