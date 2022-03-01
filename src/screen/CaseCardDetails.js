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
import InputBox from '../component/InputBox';
import CaseCard from '../component/CaseCard';

export default function CaseCardDetails({navigation}) {
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, color: '#272727'}}>Case Name</Text>
          <Text style={{fontSize: 14, color: '#272727'}}>12/3/22</Text>
        </View>
        <View
          style={{
            padding: 6,
            width: 100,
            backgroundColor: '#2D325A',
            borderRadius: 40,
            marginVertical: 10,
          }}>
          <Text style={{color: '#ffffff', alignSelf: 'center'}}>
            Public Law
          </Text>
        </View>
        <Text style={{fontSize: 16, color: '#FFB579', marginTop: 20}}>
          Judge
        </Text>
        <Text style={{fontSize: 14, color: '#414141'}}>Lorem Ipsum</Text>
        <Text style={{fontSize: 16, color: '#FFB579', marginTop: 20}}>
          Parties Name
        </Text>
        <Text style={{fontSize: 14, color: '#414141'}}>
          Lorem Ipsum v Lorem Ipsum{' '}
        </Text>
        <Text style={{fontSize: 16, color: '#FFB579', marginTop: 20}}>
          Decision
        </Text>
        <Text style={{fontSize: 14, color: '#414141'}}>
          Lorem Ipsum is simply dummy text
        </Text>
        <Text style={{fontSize: 16, color: '#FFB579', marginTop: 20}}>
          Details
        </Text>
        <Text style={{fontSize: 14, color: '#414141'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
        <Text style={{fontSize: 14, color: '#414141', marginTop: 10}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's tly with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}
