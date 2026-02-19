import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screen/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={["#72063c","#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  }
});
