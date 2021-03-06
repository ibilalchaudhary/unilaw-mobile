import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Svg, {Defs, LinearGradient, Stop, Path, G} from 'react-native-svg';

export default function LawyerCardDetails({navigation}) {
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
        <Text
          style={{color: '#272727', fontSize: 20, fontWeight: '600'}}></Text>
      </View>
      <ScrollView style={{paddingHorizontal: 20, flex: 1}}>
        <View
          style={{
            alignSelf: 'center',
            width: 160,
            height: 200,
            marginTop: 20,
          }}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 14}}
            source={require('../assets/lawyerPic.jpg')}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            color: '#272727',
            marginTop: 20,
            fontWeight: '600',
            alignSelf: 'center',
          }}>
          John Doe
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#272727',
            alignSelf: 'center',
          }}>
          Corporate Law
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#272727',
            alignSelf: 'center',
          }}>
          john@gmail.com
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 20,
            marginBottom: 40,
          }}>
          <View
            style={{
              width: '30%',
              flexDirection: 'column',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1,
              borderRightColor: '#242424',
            }}>
            <Text style={{fontSize: 18, color: '#272727'}}>4.5</Text>
            <Text style={{fontSize: 14, color: '#272727'}}>Rating</Text>
          </View>
          <View
            style={{
              width: '33%',
              flexDirection: 'column',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 18, color: '#272727'}}>12,123</Text>
            <Text style={{fontSize: 14, color: '#272727'}}>Cases</Text>
          </View>
          <View
            style={{
              width: '33%',
              flexDirection: 'column',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftWidth: 1,
              borderLeftColor: '#242424',
            }}>
            <Text style={{fontSize: 18, color: '#272727'}}>120</Text>
            <Text style={{fontSize: 14, color: '#272727'}}>Views</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 4,
              height: '100%',
              backgroundColor: '#FFB579',
              borderRadius: 4,
            }}></View>
          <View style={{width: '96%'}}>
            <Text
              style={{
                fontSize: 20,
                color: '#272727',
                fontWeight: '700',
                marginBottom: 6,
              }}>
              Description
            </Text>
            <Text style={{fontSize: 14, color: '#414141'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
