import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <FeedScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});
