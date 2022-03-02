import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-feather';

export default function BookCard({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: 55, height: 55, marginRight: 14}}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 8}}
            source={require('../assets/cardPic.jpg')}
          />
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#FFB579'}}>
            Book Name
          </Text>
          <Text style={{fontSize: 14, color: '#959595'}}>
            Lorem Ipsum is simply dummy text
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 14,
          color: '#959595',
          marginTop: -20,
          fontWeight: '600',
        }}>
        14/2/21
      </Text>
    </TouchableOpacity>
  );
}
