import React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import Heading from './src/components/Body/Heading.js';
import Input from './src/components/Body/Input.js';
import SignInButton from './src/components/Body/SignInButton.js';

App= ()=> {
  return(
    <View style={styles.container}>
      <View style={styles.body}>
      <Heading />
      <Input value="Login"></Input>
       <Input value="Password"></Input>
       <SignInButton value="Sign In"></SignInButton>
       </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  body:{
    flexDirection:'column',
  }
})
export default App;