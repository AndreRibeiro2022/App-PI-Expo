import Userfront from '@userfront/core';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

Userfront.init('demo1234', { domain: "example.com" });

// You can import from local files
import SignupForm from './components/Signup';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <SignupForm />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});