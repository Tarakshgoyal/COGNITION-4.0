import { Text,View, StyleSheet,TextInput, Button, Alert } from 'react-native';
import React,{useState} from 'react';

export default function HomeScreen(props) {
  const [name,SetName]=useState('')
  const [email,SetEmail]=useState('')
  const [password,SetPassword]=useState('')
  const [confirm,SetConfirm]=useState('')
  const submit =() =>{
    const emailRegex=/^[\w.-]+@[a-zA-Z]{2,}$/;
    const passwordRegex=/^(?=,*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
    if(!name){
      Alert.alert('please enter your name')
      return
    }
    if(!email){
      Alert.alert('please enter your email')
      return
    }
    if(!password){
      Alert.alert('please enter your password')
      return
    }
    if(!confirm){
      Alert.alert('please enter your confirm')
      return
    }
    if(password != confirm){
      Alert.alert("password don't match")
      return
    }
    if( !emailRegex.test(email)){
      Alert.alert("enter valid email")
      return
    }
    if( !passwordRegex.test(password)){
      Alert.alert('Please enter password with atlease 1 uppercase , 1 lowercase, 1 special character , 1 number and it shoud be alteast 8 character')
      return
    }
    Alert.alert('Success')

  }
  return (
    <View style={{padding: 20}}>
      <View>
        <Text style={styles.label} >Name</Text>
        <TextInput style={styles.input} value={name} onChange={(val) => SetName(val)} />
      </View>
      <View>
        <Text style={styles.label} >Email</Text>
        <TextInput style={styles.input} value={email} onChange={(val) => SetEmail(val)} />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={password} onChange={(val) => SetPassword(val)} />
      </View>
      <View>
        <Text style={styles.label}>Confirm password</Text>
        <TextInput style={styles.input} value={confirm} onChange={(val) => SetConfirm(val)} />
      </View>
      <Button title='Submit' onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  label :{
    fontSize: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'white',
  }
});
