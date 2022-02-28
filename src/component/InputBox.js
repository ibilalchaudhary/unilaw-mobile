import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff, Search} from 'react-native-feather';
import Svg, {G, Path} from 'react-native-svg';

export default function InputBox({placeholder, secureTextEntry, style}) {
  const [focus, setFocus] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
  return (
    <View style={{marginBottom: 14, marginTop: 10}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#ffffff"
        secureTextEntry={isSecureTextEntry}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        style={{
          padding: 0,
          paddingBottom: 8,
          paddingHorizontal: 6,
          borderBottomWidth: 1,
          borderBottomColor: '#8D8C8C',
          fontSize: 14,
          color: '#ffffff',
          ...style,
        }}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          style={{position: 'absolute', right: 0, bottom: 5}}
          onPress={() => {
            isSecureTextEntry
              ? setIsSecureTextEntry(false)
              : setIsSecureTextEntry(true);
          }}>
          {isSecureTextEntry ? (
            <Eye stroke="#8D8C8C" fill="none" width={20} height={20} />
          ) : (
            <EyeOff stroke="#8D8C8C" fill="none" width={20} height={20} />
          )}
        </TouchableOpacity>
      ) : null}
      {placeholder === 'Search' ? (
        <TouchableOpacity
          style={{position: 'absolute', right: 0, bottom: 5}}
          onPress={() => {}}>
          <Search stroke="#545454" fill="#fff" width={20} height={20} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
