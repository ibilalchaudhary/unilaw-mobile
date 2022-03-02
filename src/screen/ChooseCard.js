import React, {Component, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Path, G} from 'react-native-svg';

function CardEntry({onPress, toPath}) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={toPath}
      onFocus={() => {
        setSelected(true);
      }}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderColor: selected ? '#ffffff' : '#000000',
        borderWidth: selected ? 2 : 1,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#2D325A',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/card__pic.png')}
          style={{marginRight: 15, borderRadius: 6}}
        />
        <View>
          <Text style={{fontSize: 16, color: '#ffffff', marginBottom: 2}}>
            Adams Mickey
          </Text>
          <Text style={{fontSize: 12, color: '#929292'}}>
            4323 XXXX XXXX XXXX
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#ffffff',
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 6,
        }}>
        <Text style={{color: '#2D325A'}}>Edit</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default class ChooseCard extends Component {
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
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
          <CardEntry
            onPress={() => {
              navigation.navigate('EditCard');
            }}
            toPath={() => {
              navigation.navigate('OrderComplete');
            }}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
