import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import InputBox from '../component/InputBox';
import Svg, {G, Path} from 'react-native-svg';

export default function ChangePassword({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/light_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          marginVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={10.587}
            height={18.519}
            fill="#242424"
            viewBox="0 0 10.587 18.519">
            <Path
              data-name="Icon ionic-ios-arrow-back"
              d="M14.442 15.451l7.007-7a1.323 1.323 0 10-1.874-1.871l-7.939 7.933a1.321 1.321 0 00-.039 1.825l7.972 7.988a1.323 1.323 0 101.874-1.869z"
              transform="translate(-11.251 -6.194)"
            />
          </Svg>
        </TouchableOpacity>
        <Text
          style={{
            color: '#283244',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Change Password
        </Text>
      </View>
      <View style={{width: '100%', padding: 20, marginTop: 60}}>
        <InputBox
          isDark={true}
          placeholder="Enter Previous Password"
          secureTextEntry={true}
        />
        <InputBox
          isDark={true}
          placeholder="Enter New Password"
          secureTextEntry={true}
        />
        <InputBox
          isDark={true}
          placeholder="Re-Enter New Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}
          style={{
            backgroundColor: '#181D3D',
            padding: 13,
            width: '60%',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            alignSelf: 'center',
          }}>
          <Text style={{color: '#ffffff'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
