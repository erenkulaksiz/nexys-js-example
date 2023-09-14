import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import nexys from './nexys';
import type {PropsWithChildren} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function Button({onPress, children}: PropsWithChildren<{onPress: () => void}>) {
  return (
    <TouchableOpacity
      style={{padding: 8, backgroundColor: 'gray'}}
      onPress={onPress}>
      <Text style={{color: 'black'}}>{children}</Text>
    </TouchableOpacity>
  );
}

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onLog() {
    // Log a message.
    nexys.log('Test log');
  }

  function onErrorLog() {
    // Log an error.
    nexys.error({message: 'Test error log'});
  }

  function subscribe() {
    // Subscribe to log.add
    nexys.Events.subscribe('log.add', data => {
      console.log('log added!', data);
    });
  }

  function clearLogs() {
    // Clear logs and requests.
    nexys.clear();
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            flexDirection: 'column',
            gap: 4,
          }}>
          <Button onPress={clearLogs}>Clear</Button>
          <Button onPress={onLog}>Test log</Button>
          <Button onPress={onErrorLog}>Error log</Button>
          <Button onPress={subscribe}>Subscribe to "log.add"</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
