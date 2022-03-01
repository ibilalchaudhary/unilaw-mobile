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
import {Menu} from 'react-native-feather';
import Svg, {G, Path} from 'react-native-svg';

export default function Home() {
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
        <TouchableOpacity>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={21.48}
            height={16}
            viewBox="0 0 21.48 16">
            <G
              transform="translate(-2 -5.579)"
              fill="none"
              stroke="#8a8a8a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}>
              <Path
                data-name="Line 2"
                transform="translate(3 13.579)"
                d="M11.5 0L0 0"
              />
              <Path
                data-name="Line 3"
                transform="translate(3 6.579)"
                d="M19.48 0L0 0"
              />
              <Path
                data-name="Line 4"
                transform="translate(3 20.579)"
                d="M19.48 0L0 0"
              />
            </G>
          </Svg>
        </TouchableOpacity>
        <View style={{width: 60, height: 65}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/logoDark.png')}
          />
        </View>
        <TouchableOpacity style={{width: 40, height: 40}}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 40}}
            source={require('../assets/profile.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
