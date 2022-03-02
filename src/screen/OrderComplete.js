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
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';

export default function OrderComplete({navigation}) {
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
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={370.766}
          height={370.766}
          viewBox="0 0 514.766 514.766">
          <Defs>
            <LinearGradient
              id="b"
              x1={0.5}
              x2={0.5}
              y2={1}
              gradientUnits="objectBoundingBox">
              <Stop offset={0} stopColor="#ffedde" />
              <Stop offset={1} stopColor="#ffb579" />
            </LinearGradient>
            <LinearGradient
              id="e"
              x1={0.5}
              x2={0.5}
              y2={1}
              gradientUnits="objectBoundingBox">
              <Stop offset={0} stopColor="#ffedde" />
              <Stop offset={1} stopColor="#2d325a" />
            </LinearGradient>
          </Defs>
          <G data-name="Group 1301">
            <G
              transform="translate(19.297 -82.642) translate(-19.3 82.64)"
              filter="url(#a)"
              style={{
                mixBlendMode: 'soft-light',
                isolation: 'isolate',
              }}>
              <Path
                data-name="Path 6634"
                d="M161.383 0A161.383 161.383 0 110 161.383 161.383 161.383 0 01161.383 0z"
                transform="translate(96 93)"
                fill="url(#b)"
              />
            </G>
            <G
              transform="translate(19.297 -82.642) translate(-19.3 82.64)"
              filter="url(#c)">
              <Path
                data-name="Path 6633"
                d="M126.647 0A126.647 126.647 0 110 126.647 126.647 126.647 0 01126.647 0z"
                transform="translate(130.74 127.74)"
                fill="#2d325a"
              />
            </G>
            <G
              transform="translate(19.297 -82.642) translate(-19.3 82.64)"
              filter="url(#d)"
              style={{
                mixBlendMode: 'soft-light',
                isolation: 'isolate',
              }}>
              <Path
                data-name="Path 2613"
                d="M93.473 0A93.473 93.473 0 110 93.473 93.473 93.473 0 0193.473 0z"
                transform="translate(163.91 160.91)"
                fill="url(#e)"
              />
            </G>
            <Path
              d="M29.321 53.8L1 25.481l6.72-6.72 21.6 21.121L68.2 1l6.72 6.72z"
              transform="translate(19.297 -82.642) translate(200.692 309.624)"
              fill="#fff"
            />
          </G>
        </Svg>
        <View style={{width: '100%', padding: 20}}>
          <Text
            style={{
              fontSize: 18,
              width: '70%',
              color: '#283244',
              marginBottom: 25,
              alignSelf: 'center',
              marginTop: -70,
              textAlign: 'center',
            }}>
            You have been successfully get the Subscription
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              backgroundColor: '#181D3D',
              padding: 13,
              width: '60%',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Text style={{color: '#ffffff'}}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
