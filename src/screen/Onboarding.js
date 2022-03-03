import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Tab = createMaterialTopTabNavigator();

function Onboarding1({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/onboarding1.png')}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 20,
        paddingHorizontal: 14,
      }}>
      <ImageBackground source={require('../assets/onboardingContent.png')}>
        <View
          style={{
            marginVertical: 40,
            padding: 20,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: '#00020C',
            }}>
            Let's Connect
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: '#00020C',
              marginBottom: 10,
            }}>
            With Us For Decisions
          </Text>
          <Text style={{fontSize: 14, color: '#AB5703'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Onboarding2');
            }}
            style={{
              backgroundColor: '#ffffff',
              padding: 12,
              width: 120,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#00020C', marginRight: 10}}>Next</Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right">
                <Path d="M5 12L19 12" />
                <Path d="M12 5L19 12 12 19" />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}
function Onboarding2({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/onboarding2.png')}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 20,
        paddingHorizontal: 14,
      }}>
      <ImageBackground source={require('../assets/onboardingContent.png')}>
        <View
          style={{
            marginVertical: 40,
            padding: 20,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: '#00020C',
            }}>
            Let's Connect
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: '#00020C',
              marginBottom: 10,
            }}>
            With Us For Decisions
          </Text>
          <Text style={{fontSize: 14, color: '#AB5703'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            style={{
              backgroundColor: '#ffffff',
              padding: 12,
              width: 120,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#00020C', marginRight: 10}}>Next</Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right">
                <Path d="M5 12L19 12" />
                <Path d="M12 5L19 12 12 19" />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}

export default function Onboarding() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name="Onboarding1" component={Onboarding1} />
      <Tab.Screen name="Onboarding2" component={Onboarding2} />
    </Tab.Navigator>
  );
}
