import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VersionCheck from 'react-native-version-check-expo';
const currentVersion = VersionCheck.getCurrentVersion();


export default function App() {
  return (
    <View style={styles.container}>
      <Text>VERSION : {currentVersion}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
