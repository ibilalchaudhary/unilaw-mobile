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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function GalleryPopup({setIsPopup}) {
  return (
    <View
      style={{
        width: '100%',
        padding: 40,
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}>
      <TouchableOpacity
        onPress={() => {
          launchCamera({
            cameraType: 'back',
          });
          setIsPopup(false);
        }}
        style={{
          backgroundColor: '#181D3D',
          padding: 13,
          width: '100%',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#ffffff'}}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          launchImageLibrary({
            mediaType: 'photo',
          });
          setIsPopup(false);
        }}
        style={{
          backgroundColor: '#181D3D',
          padding: 13,
          width: '100%',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 14,
          alignSelf: 'center',
        }}>
        <Text style={{color: '#ffffff'}}>Open Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsPopup(false);
        }}
        style={{
          backgroundColor: '#181D3D',
          padding: 13,
          width: '100%',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 14,
          alignSelf: 'center',
          marginBottom: 40,
        }}>
        <Text style={{color: '#ffffff'}}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function EditProfile({navigation}) {
  const [isPopup, setIsPopup] = useState(false);
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
            width: 160,
            height: 160,
            borderRadius: 1600,
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
          onPress={() => {
            setIsPopup(true);
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: '#181D3D',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 100,
            bottom: 230,
          }}>
          <Camera stroke="#fff" width={20} height={20} />
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
      {isPopup ? <GalleryPopup setIsPopup={setIsPopup} /> : null}
    </ImageBackground>
  );
}
