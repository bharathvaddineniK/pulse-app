import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pulse App</Text>
      <View style={styles.separator} />
      <Text style={styles.subtitle}>Foundation is set. Ready to build.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // The background color is now inherited from the layout
  },
  title: {
    fontSize: 32,
    // Use the "Inter" font family and Primary Text color from our theme
    fontFamily: 'Inter_700Bold',
    color: Colors.dark.primaryText,
  },
  subtitle: {
    fontSize: 16,
    // Use the "Inter" font family and Secondary Text color from our theme
    fontFamily: 'Inter_400Regular',
    color: Colors.dark.secondaryText,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: Colors.dark.surface,
  },
});
