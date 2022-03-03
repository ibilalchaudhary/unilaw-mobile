import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Camera} from 'react-native-feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function GalleryPopup({setIsPopup}) {
  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        paddingVertical: 34,
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

export default function UploadPic({navigation}) {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <ImageBackground
      source={require('../assets/light_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/logoDark.png')}
        style={{marginTop: 40}}
      />
      <View style={{width: '100%', padding: 20}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#283244',
            marginBottom: 25,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          Upload Picture
        </Text>
        <View
          style={{
            width: 160,
            height: 160,
            borderRadius: 160,
            alignSelf: 'center',
            position: 'relative',
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
            right: 110,
            bottom: 120,
          }}>
          <Camera width={20} height={20} stroke="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Subscriptions');
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
          <Text style={{color: '#ffffff'}}>Next</Text>
        </TouchableOpacity>
      </View>
      {isPopup ? <GalleryPopup setIsPopup={setIsPopup} /> : null}
    </ImageBackground>
  );
}
