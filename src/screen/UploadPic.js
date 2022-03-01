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
import InputVerfication from '../component/InputVerfication';
import {Camera} from 'react-native-feather';

export default function UploadPic({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/light_bg.png')}
        style={{
          width: '100%',
          height: Dimensions.get('window').height,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/logoDark.png')}
          style={{position: 'absolute', top: 80, width: 110, height: 130}}
        />
        <View style={{width: '100%', padding: 20}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#283244',
              marginBottom: 25,
              alignSelf: 'center',
            }}>
            Upload Picture
          </Text>
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 200,
              alignSelf: 'center',
              position: 'relative',
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
              right: 120,
              bottom: 120,
            }}>
            <Camera stroke="#fff" />
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
      </ImageBackground>
    </ScrollView>
  );
}
