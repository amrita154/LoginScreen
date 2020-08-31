import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

Heading = () => {
    return(
        <View style={{
            alignItems:'center'
        }}>
            <Text style={styles.textStyle}>
                Sign In
            </Text>
            </View>
)


};

const styles=StyleSheet.create({
    
    textStyle:{
        fontSize:30,
        fontWeight:'bold',

    }
})

export default Heading;
