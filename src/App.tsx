import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
