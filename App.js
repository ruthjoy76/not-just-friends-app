import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Navigator from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {Amplify} from 'aws-amplify';


import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  const Amplify = require('aws-amplify');

  return (
    <SafeAreaProvider style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9c9c9",
  },
});
