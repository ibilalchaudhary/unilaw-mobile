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

export default function Profile({navigation}) {
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
          Profile
        </Text>
      </View>
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#2D325A',
            borderRadius: 12,
            marginVertical: 40,
          }}>
          <View
            style={{width: 70, height: 70, marginRight: 20, marginLeft: 20}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 70}}
              source={require('../assets/cardPic.jpg')}
            />
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#ffffff'}}>
              John walker
            </Text>
            <Text style={{fontSize: 14, color: '#ffffff'}}>
              johnwalker@gmail.com
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={14.702}
            height={19.297}
            viewBox="0 0 14.702 19.297">
            <Path
              data-name="Icon material-lock-open"
              d="M13.351 16.2a1.838 1.838 0 10-1.838-1.838 1.843 1.843 0 001.838 1.838zm5.513-8.27h-.919V6.094a4.594 4.594 0 00-9.189 0H10.5a2.849 2.849 0 015.7 0v1.838H7.838A1.843 1.843 0 006 9.77v9.189A1.843 1.843 0 007.838 20.8h11.026a1.843 1.843 0 001.836-1.841V9.77a1.843 1.843 0 00-1.836-1.838zm0 11.027H7.838V9.77h11.026z"
              transform="translate(-6 -1.5)"
              fill="#272727"
            />
          </Svg>
          <Text style={{fontSize: 16, color: '#272727', marginLeft: 16}}>
            Change password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favourite');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20.117}
            height={18.457}
            viewBox="0 0 20.117 18.457">
            <Path
              data-name="Icon material-favorite-border"
              d="M17.585 4.5a6.023 6.023 0 00-4.526 2.1 6.024 6.024 0 00-4.527-2.1A5.478 5.478 0 003 10.032c0 3.8 3.42 6.9 8.6 11.608l1.458 1.318 1.458-1.328c5.18-4.7 8.6-7.8 8.6-11.6a5.478 5.478 0 00-5.531-5.53zm-4.426 15.641l-.1.1-.1-.1c-4.788-4.335-7.946-7.2-7.946-10.109a3.438 3.438 0 013.521-3.52 3.932 3.932 0 013.591 2.374H14a3.907 3.907 0 013.581-2.374 3.438 3.438 0 013.521 3.52c.003 2.907-3.155 5.774-7.943 10.109z"
              transform="translate(-3 -4.5)"
              fill="#272727"
            />
          </Svg>
          <Text style={{fontSize: 16, color: '#272727', marginLeft: 16}}>
            Favourite
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChooseCard');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={19.878}
            height={19.878}
            viewBox="0 0 19.878 19.878">
            <Path
              data-name="Icon material-subscriptions"
              d="M20.89 8.963H4.988V6.976h15.9zM18.9 3H6.976v1.988H18.9zm3.976 9.939v7.951a1.994 1.994 0 01-1.988 1.988h-15.9A1.994 1.994 0 013 20.89v-7.951a1.994 1.994 0 011.988-1.988h15.9a1.994 1.994 0 011.99 1.988zm-5.963 3.976l-5.963-3.25v6.49z"
              transform="translate(-3 -3)"
              fill="#272727"
            />
          </Svg>
          <Text style={{fontSize: 16, color: '#272727', marginLeft: 16}}>
            Subscription
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}
