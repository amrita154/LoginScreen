import React from 'react';
import {Text,View, TextInput} from 'react-native';

Input=({value})=>{
return(
    <TextInput style={{
        height:40,
        backgroundColor:'gray',
        color:'white',
        fontSize:30,
        margin:10,
    }} defaultValue={value}>
        
    </TextInput>
)
}

export default Input;