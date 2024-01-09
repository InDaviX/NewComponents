import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          value={email}
          keyboardType={'email-address'}
          placeholder="Email adress"
          style={{borderWidth: 1, borderRadius: 9, padding: 10, margin: 20}}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          style={{
            borderWidth: 1,
            borderRadius: 9,
            padding: 10,
            margin: 20,
            marginTop: 0,
          }}
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <Pressable
          disabled={email.length <= 10 || password.length < 8}
          style={[
            {
              backgroundColor: '#BBBBBB',
              margin: 20,
              marginTop: 0,
              borderRadius: 9,
              borderWidth: 1,
            },
            (email.length <= 10 || password.length < 8) && {opacity: 0.5},
          ]}
          onPress={() => {
            console.log(email, password);
          }}>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              padding: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Submit
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
