import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const navigation = useNavigation<any>();

  const handleSignup = () => {
    if (!username.trim()) {
      Alert.alert(
        'Missing Username',
        'Please enter a GitHub username'
      );
      return;
    }

    navigation.navigate('Map');
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