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
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/logoDark.png')}
        style={{position: 'absolute', top: 80, width: 110, height: 130}}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{position: 'relative'}}>
        <Image source={require('../assets/subscription1mon.png')} />
        <View style={{position: 'absolute', top: 25, left: 20}}>
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
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{position: 'relative', marginTop: 20}}>
        <Image source={require('../assets/subscription1year.png')} />
        <View style={{position: 'absolute', top: 25, left: 20}}>
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
      </TouchableOpacity>
    </ImageBackground>
  );
}
