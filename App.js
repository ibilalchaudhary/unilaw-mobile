import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './src/screen/Onboarding';
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';
import Verification from './src/screen/Verification';
import UploadPic from './src/screen/UploadPic';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        // initialRouteName="CameraOpen"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="UploadPic" component={UploadPic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
