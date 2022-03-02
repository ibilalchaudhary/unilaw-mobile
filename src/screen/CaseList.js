import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Svg, {Defs, LinearGradient, Stop, Path, G} from 'react-native-svg';
import InputBox from '../component/InputBox';
import CaseCard from '../component/CaseCard';

function NavLink({title, selected, setSelected}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(title);
      }}
      style={{width: '32%'}}>
      <Text
        style={{
          textAlign: 'center',
          color: selected === title ? '#FFB579' : '#272727',
          fontSize: 15,
        }}>
        {title}
      </Text>
      {selected === title ? (
        <View
          style={{
            width: 80,
            marginTop: 1,
            height: 2,
            backgroundColor: '#FFB579',
            alignSelf: 'center',
          }}></View>
      ) : null}
    </TouchableOpacity>
  );
}

export default function CaseList({navigation}) {
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
          Case List
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          paddingHorizontal: 20,
        }}>
        <InputBox isDark={true} placeholder="Search Case" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <NavLink
          selected={selected}
          setSelected={setSelected}
          title="Public law"
        />
        <NavLink
          selected={selected}
          setSelected={setSelected}
          title="Labour law"
        />
        <NavLink
          selected={selected}
          setSelected={setSelected}
          title="Criminal law"
        />
      </View>
      <ScrollView style={{paddingHorizontal: 20, flex: 1, marginTop: 10}}>
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
        <CaseCard
          onPress={() => {
            navigation.navigate('CaseCardDetails');
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
}
