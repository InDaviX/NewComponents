import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'green',
          width: 80,
          height: 80,
        }}
      />
      <View
        style={{
          backgroundColor: 'blue',
          width: 80,
          height: 80,
        }}
      />
      <View
        style={{
          backgroundColor: 'yellow',
          width: 80,
          height: 80,
        }}
      />
    </View>
  );
};

export default App;
