import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState({
    uri: 'https://i.pinimg.com/736x/fa/ff/1a/faff1ae99e9a694e40e3c9d3f2a17cdc.jpg',
  });
  return (
    <SafeAreaView>
      <Image
        source={require('./assets/images/cake.png')}
        style={{width: 100, height: 100}}
      />
      <Image
        source={imageSource}
        style={{width: '100%', height: 400, backgroundColor: 'darkgray'}}
        resizeMode={'contain'}
        onError={() => {
          console.log('error');
          setImageSource(require('./assets/images/error.png'));
        }}
      />
    </SafeAreaView>
  );
};

export default App;
