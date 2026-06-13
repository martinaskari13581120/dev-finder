import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>M</Text>
      </View>

      <Text style={styles.name}>Martin Askari</Text>

      <Text style={styles.username}>
        GitHub: martinirani
      </Text>

      <Text style={styles.bio}>
        Mobile Developer Student
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  avatarText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  username: {
    fontSize: 18,
    marginBottom: 10,
  },

  bio: {
    fontSize: 16,
    color: '#666',
  },
});