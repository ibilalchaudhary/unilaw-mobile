import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function TermConditionsCard() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#ffffff',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#283244',
          marginVertical: 6,
          marginTop: 10,
        }}>
        Heading Here
      </Text>
      <Text style={{fontSize: 12, color: '#919191'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged Lorem Ipsum
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>
    </View>
  );
}

export default function TermConditions({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9F9F9',
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={10.587}
            height={18.519}
            fill="#242424"
            viewBox="0 0 10.587 18.519">
            <Path
              data-name="Icon ionic-ios-arrow-back"
              d="M14.442 15.451l7.007-7a1.323 1.323 0 10-1.874-1.871l-7.939 7.933a1.321 1.321 0 00-.039 1.825l7.972 7.988a1.323 1.323 0 101.874-1.869z"
              transform="translate(-11.251 -6.194)"
            />
          </Svg>
        </TouchableOpacity>
        <Text
          style={{
            color: '#283244',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Terms & Conditions
        </Text>
      </View>
      <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
        <TermConditionsCard />
        <TermConditionsCard />
        <TermConditionsCard />
        <TermConditionsCard />
        <TermConditionsCard />
      </ScrollView>
    </SafeAreaView>
  );
}
