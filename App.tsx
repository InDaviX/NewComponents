import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
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
        <TouchableWithoutFeedback
          onPress={() => setKeepLoggedIn(!keepLoggedIn)}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              justifyContent: 'center',
            }}>
            <Switch
              style={{marginTop: 3}}
              value={keepLoggedIn}
              onValueChange={value => {
                setKeepLoggedIn(value);
              }}
            />
            <Text style={{paddingLeft: 5, paddingRight: 30, fontSize: 18}}>
              Keep me logged in
            </Text>
          </View>
        </TouchableWithoutFeedback>
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
