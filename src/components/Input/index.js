import React from 'react';
import {Text, View, TextInput} from 'react-native';

Input = (props) => {
  return (
    <TextInput
      style={props.style}
      placeholder={props.value}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      underlineColorAndroid='transparent'></TextInput>
      
  );
};

export default Input;
