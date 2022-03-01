import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './src/screen/Onboarding';
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';
import Verification from './src/screen/Verification';
import UploadPic from './src/screen/UploadPic';
import Subscriptions from './src/screen/Subscriptions';
import Home from './src/screen/Home';
import ForgotPassword from './src/screen/ForgotPassword';
import CaseList from './src/screen/CaseList';

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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="UploadPic" component={UploadPic} />
        <Stack.Screen name="Subscriptions" component={Subscriptions} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CaseList" component={CaseList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
