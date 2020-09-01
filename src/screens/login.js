import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Title from '../components/Title/index.js';
import Input from '../components/Input/index.js';
import TouchableText from '../components/TouchableText/index.js';
import ScreenHeader from '../components/Header/index.js';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      LoginEmail: '',
      Password: '',
    };
  }
  validateEmail() {
    InputMail=this.state.LoginEmail;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(InputMail)) {
      console.log('Y');
    } else {
      console.log('N');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ScreenHeader></ScreenHeader>
          <Title />
          <Input
            value="Login"
            style={styles.input}
            onChangeText={(data) =>
              this.setState({
                LoginEmail: data,
              })
            }></Input>
          <Input
            value="Password"
            secureTextEntry={true}
            style={styles.input}></Input>
          <TouchableText value="Sign In" style={styles.button} onPress={()=>this.validateEmail()}></TouchableText>
          <View style={styles.body2}>
            <TouchableText
              value="Forgot Password ?"
              style={styles.touchtext1}></TouchableText>
            <TouchableText
              value="Sign Up"
              style={styles.touchtext2}></TouchableText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flexDirection: 'column',
  },
  body2: {
    flexDirection: 'row',
  },
  button: {
    fontSize: 20,
    color: 'blue',
  },
  touchtext1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  touchtext2: {
    justifyContent: 'flex-end',
    paddingLeft: 220,
    alignItems: 'flex-end',
  },
  input: {
    height: 40,
    fontSize: 30,
    margin: 10,
  },
});
export default Login;
