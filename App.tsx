import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function App(): JSX.Element {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDark ? styles.lightColor : styles.darkColor}>
        Hello World !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightColor: {
    color: '#fff',
  },
  darkColor: {
    color: '#000',
  },
});

export default App;
