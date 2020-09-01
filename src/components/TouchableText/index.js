import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

TouchableText = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      
      <Text style={props.style}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TouchableText;
