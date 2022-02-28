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

export default function SignUp({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/login_bg.png')}
        style={{
          width: '100%',
          height: Dimensions.get('window').height,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/logoLight.png')}
          style={{position: 'absolute', top: 80, width: 110, height: 130}}
        />
        <View style={{width: '100%', padding: 20, marginTop: 80}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#FFB579',
              marginBottom: 15,
            }}>
            Register
          </Text>
          <InputBox placeholder="Phone Number" />
          <InputBox placeholder="Name" />
          <InputBox placeholder="Email" />
          <InputBox placeholder="Password" secureTextEntry={true} />
          <InputBox placeholder="Confirm Password" secureTextEntry={true} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Verification');
            }}
            style={{
              backgroundColor: '#FFB579',
              padding: 13,
              width: '60%',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
            }}>
            <Text style={{color: '#000000'}}>Sign Up</Text>
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
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}
              style={{marginLeft: 5}}>
              <Text
                style={{
                  color: '#FFB579',
                  textDecorationColor: '#FFB579',
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
