import { useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { UsersContext } from '../context/UsersContext';

export default function MapScreen() {
  const navigation = useNavigation<any>();
  const { users } = useContext(UsersContext);

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  useEffect(() => {
  getLocation();
}, []);

const getLocation = async () => {
  const { status } =
    await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    return;
  }

  const location =
    await Location.getCurrentPositionAsync({});

  setLatitude(location.coords.latitude);
  setLongitude(location.coords.longitude);
};

  console.log('Users:', users);
  console.log('Count:', users.length);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Map</Text>

      <View style={styles.map}>
        <Text>Map Placeholder</Text>
        
        <Text>Latitude: {latitude}</Text>
        <Text>Longitude: {longitude}</Text>

        <Text style={styles.users}>
          Users Loaded: {users.length}
        </Text>
      </View>

      <AppButton
        title="View Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  map: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#2563eb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  users: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});