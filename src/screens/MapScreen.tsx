import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Map</Text>

      <View style={styles.map}>
        <Text>Map Placeholder</Text>
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
});