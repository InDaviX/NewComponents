import React from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        onScroll={() => {
          console.log('We scrolled the ScrollView');
        }}
        contentContainerStyle={{backgroundColor: 'red', height: 510}}
        showsVerticalScrollIndicator={false}
        horizontal={true}>
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
        <Image
          source={require('./assets/images/cake.png')}
          style={{height: 500, width: 500}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
