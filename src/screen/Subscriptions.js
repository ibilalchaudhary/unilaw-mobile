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

export default function Subscriptions({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/light_bg.png')}
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Image
        source={require('../assets/logoDark.png')}
        style={{marginTop: 40}}
      />

      <TouchableOpacity
        style={{
          width: Dimensions.get('window').width,
          padding: 14,
          paddingVertical: 10,
          marginTop: 40,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <ImageBackground
          style={{padding: 20, paddingVertical: 30}}
          source={require('../assets/subscription1mon.png')}>
          <View>
            <Text style={{fontSize: 18, color: '#181819', fontWeight: '600'}}>
              Subscription For 1 Month
            </Text>
            <Text style={{fontSize: 14, color: '#181819', fontWeight: '600'}}>
              $30.00
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{
                padding: 6,
                backgroundColor: '#FE7745',
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginTop: 10,
              }}>
              <Text style={{color: '#ffffff', fontWeight: '600'}}>Try It</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: Dimensions.get('window').width,
          padding: 14,
          paddingVertical: 10,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <ImageBackground
          style={{padding: 20, paddingVertical: 30}}
          source={require('../assets/subscription1year.png')}>
          <View>
            <Text style={{fontSize: 18, color: '#ffffff', fontWeight: '600'}}>
              Subscription For 1 Year
            </Text>
            <Text style={{fontSize: 14, color: '#ffffff', fontWeight: '600'}}>
              $30.00
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{
                padding: 6,
                backgroundColor: '#FE7745',
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                marginTop: 10,
              }}>
              <Text style={{color: '#ffffff', fontWeight: '600'}}>Try It</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </ImageBackground>
  );
}
