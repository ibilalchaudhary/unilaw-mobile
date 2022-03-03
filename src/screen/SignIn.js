import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import InputBox from '../component/InputBox';

export default function SignIn({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/login_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
      }}>
      <Image
        style={{marginTop: 40}}
        source={require('../assets/logoLight.png')}
      />
      <View style={{width: '100%', padding: 20}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#FFB579',
            marginBottom: 15,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          Sign In
        </Text>
        <InputBox placeholder="Email" />
        <InputBox placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={{marginLeft: 'auto'}}>
          <Text
            style={{
              color: '#ffffff',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            backgroundColor: '#FFB579',
            padding: 13,
            width: '60%',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <Text style={{color: '#000000'}}>Sign In</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#ffffff',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={{marginLeft: 5}}>
            <Text
              style={{
                color: '#FFB579',
                textDecorationColor: '#FFB579',
                textDecorationLine: 'underline',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
