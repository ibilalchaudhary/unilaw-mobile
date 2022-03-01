import React, {Component, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import InputBox from '../component/InputBox';

export default class EditCard extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardNumber: '',
      exp: '',
      year: '',
      cvc: '',
    };
  }
  render() {
    const navigation = this.props.navigation;
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
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChooseCard');
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#2D325A',
              padding: 20,
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffffff', fontSize: 16}}>
                Mehfooz Rehman
              </Text>
              <Image source={require('../assets/card__pic.png')} />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: '#ffffff',
                fontSize: 16,
                marginVertical: 20,
              }}>
              X454 4554 3434 4545
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>
                Year
              </Text>
              <Text
                style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>
                CVC
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffffff', fontSize: 14}}>01/25</Text>
              <Text style={{color: '#ffffff', fontSize: 14}}>XXX</Text>
            </View>
          </View>
          <InputBox placeholder="Card Name" isDark={true} />
          <InputBox placeholder="Card No." isDark={true} />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{width: '50%', marginRight: 10}}>
              <InputBox placeholder="Exp." isDark={true} />
            </View>
            <View style={{flex: 1}}>
              <InputBox placeholder="Year" isDark={true} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{width: '50%', marginRight: 10}}>
              <Text style={{color: '#272727'}}>
                Enter the code from back of your card
              </Text>
            </View>
            <View style={{flex: 1}}>
              <InputBox placeholder="CVS" isDark={true} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChooseCard');
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
      </ImageBackground>
    );
  }
}
