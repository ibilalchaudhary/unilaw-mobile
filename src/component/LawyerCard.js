import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function LawyerCard({onPress}) {
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
            source={require('../assets/lawyerPic.jpg')}
          />
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#FFB579'}}>
            Lawyer Name
          </Text>
          <Text style={{fontSize: 14, color: '#959595'}}>213 cases</Text>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={12.937}
          height={12.597}
          viewBox="0 0 7.937 7.597">
          <Path
            data-name="Icon awesome-star"
            d="M4.984.263l-.969 1.965-2.167.316a.475.475 0 00-.263.81l1.568 1.528-.37 2.158a.474.474 0 00.688.5L5.41 6.521 7.349 7.54a.475.475 0 00.688-.5l-.371-2.158 1.569-1.528a.475.475 0 00-.263-.81L6.8 2.228 5.836.263a.475.475 0 00-.852 0z"
            transform="translate(-1.441 .001)"
            fill="#787878"
          />
        </Svg>
        <Text
          style={{
            fontSize: 14,
            color: '#959595',
            fontWeight: '600',
            marginLeft: 4,
          }}>
          4.5
        </Text>
      </View>
    </TouchableOpacity>
  );
}
