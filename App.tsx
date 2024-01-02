import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import style from './assets/appStyle/appStyle';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [textValue2, setTextValue2] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={style.input}
        value={textValue}
        onChangeText={value => {
          setTextValue(value);
        }}
        placeholder="Imię"
      />
      <TextInput
        style={style.input}
        value={textValue2}
        onChangeText={value => {
          setTextValue2(value);
        }}
        placeholder="Nazwisko"
        autoFocus={true}
      />
      <TextInput
        style={style.input}
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
        placeholder="Hasło"
        secureTextEntry={true}
        returnKeyType={'send'}
      />
      <TextInput
        style={style.input}
        value={phoneNumber}
        onChangeText={value => {
          setPhoneNumber(value);
        }}
        placeholder="Numer telefonu"
        secureTextEntry={true}
        keyboardType="phone-pad"
      />
    </SafeAreaView>
  );
};

export default App;
