import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HomeNav({title, isNav, setIsNav}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setIsNav(title);
      }}
      style={{marginRight: 14}}>
      <Text
        style={{
          fontSize: 18,
          color: isNav === title ? '#FFB579' : '#959595',
          fontWeight: '500',
        }}>
        {title}
      </Text>
      {isNav === title ? (
        <View
          style={{
            width: '65%',
            height: 3,
            backgroundColor: '#FFB579',
            borderRadius: 6,
          }}></View>
      ) : null}
    </TouchableOpacity>
  );
}
