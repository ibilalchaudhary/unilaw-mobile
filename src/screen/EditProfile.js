import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Svg, {Defs, LinearGradient, Stop, Path, G} from 'react-native-svg';
import {Camera} from 'react-native-feather';
import InputBox from '../component/InputBox';

export default function EditProfile({navigation}) {
  const [selected, setSelected] = useState('Public law');
  return (
    <ImageBackground
      source={require('../assets/home_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={11.312}
            height={17.198}
            viewBox="0 0 11.312 17.198">
            <Path
              data-name="Icon ionic-ios-arrow-back"
              d="M14.661 14.791l7.487-6.5a1.114 1.114 0 000-1.736 1.576 1.576 0 00-2 0l-8.486 7.365a1.114 1.114 0 00-.041 1.695l8.518 7.419a1.578 1.578 0 002 0 1.114 1.114 0 000-1.736z"
              transform="translate(-11.251 -6.194)"
              fill="#272727"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={{color: '#272727', fontSize: 20, fontWeight: '600'}}>
          Edit Profile
        </Text>
      </View>
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <View
          style={{
            width: 180,
            height: 180,
            borderRadius: 200,
            alignSelf: 'center',
            position: 'relative',
            marginVertical: 20,
            marginTop: 40,
          }}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/profile.png')}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: '#181D3D',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 100,
            bottom: 230,
          }}>
          <Camera stroke="#fff" />
        </TouchableOpacity>
        <InputBox isDark={true} placeholder="Email" />
        <InputBox
          isDark={true}
          placeholder=" Password"
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
      </ScrollView>
    </ImageBackground>
  );
}
