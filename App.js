import React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import Login from './src/screens/login.js';

App= ()=> {
  return(
    <View style={styles.container}>
      <Login/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  }
})
export default App;