import React, { useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Gap from '../../atoms/Gap';
import Button from '../../atoms/Button';

const App = () => {
  const [name, setName] = useState("");
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [address, setAddress] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");

      const handleSubmit = () => {
        const data = {
          name: name,
          username: username,
          email: email,
          address: address,
          phoneNumber: phoneNumber,
    };
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Registration</Text>
        <Gap height={40} />
        <TextInput label="Name" placeholder="Masukan nama lengkap anda" value={name} onChangeText={e => setName(e)} />
        <Gap height={20} />
        <TextInput label="Username" placeholder="Masukan username anda" value={username} onChangeText={e => setUsername(e)} />
        <Gap height={20} />
        <TextInput label="Email" placeholder="Masukan nama email anda" value={email} onChangeText={e => setEmail(e)} />
        <Gap height={20} />
        <TextInput label="Address" placeholder="Masukan alamat anda" value={address} onChangeText={e => setAddress(e)} />
        <Gap height={20} />
        <TextInput label="Phone Number" placeholder="Masukan nomor telepon anda" keyboardType='number-pad' value={phoneNumber} onChangeText={e => setPhoneNumber(e)} />
        <Gap height={29} />
        <Button label="Register" onSubmit={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  labelInput: {
    fontSize: 18,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingLeft: 15,
    paddingVertical: 15,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#C238CE',
    paddingVertical: 15,
    borderRadius: 40,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});;

export default App;