import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import VersionCheck from 'react-native-version-check'
import Constants from 'expo-constants';
import * as appjson from './app.json';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [currentVersion, setCurrentVersion] = React.useState(null);
  const [isUpdateNeeded, setIsUpdateNeeded] = React.useState(false)
  
  React.useEffect(()=>{
    setCurrentVersion(VersionCheck.getCurrentVersion());
  }, [])

  React.useEffect(()=>{
    if(currentVersion){
      VersionCheck.needUpdate({
        currentVersion: currentVersion,
        latestVersion: "52.0.0"
      }).then(res => {
        setIsUpdateNeeded(JSON.stringify(res.isNeeded));
      });
    }
  }, [currentVersion])
  
  
  return (
    <View style={styles.container}>
      <Card>
        <Text>
          CV: {currentVersion}
        </Text>
        <Text>
          UPDATE NEED: {isUpdateNeeded}
        </Text>
        <Text>
          CONSANTS MANIFEST: {Constants.manifest.version} 
        </Text>
        <Text>
          APP JSON {appjson.expo.version}
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
