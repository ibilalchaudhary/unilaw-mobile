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
import CaseCardDetails from './src/screen/CaseCardDetails';
import Profile from './src/screen/Profile';
import Favourite from './src/screen/Favourite';
import ChangePassword from './src/screen/ChangePassword';
import ChooseCard from './src/screen/ChooseCard';
import OrderComplete from './src/screen/OrderComplete';
import EditCard from './src/screen/EditCard';
import EditProfile from './src/screen/EditProfile';
import BookCard from './src/component/BookCard';
import BookCardDetails from './src/screen/BookCardDetails';
import Notification from './src/screen/Notification';
import PrivacyPolicy from './src/screen/PrivacyPolicy';
import TermConditions from './src/screen/TermConditions';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        // initialRouteName="EditCard"
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
        <Stack.Screen name="CaseCardDetails" component={CaseCardDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ChooseCard" component={ChooseCard} />
        <Stack.Screen name="OrderComplete" component={OrderComplete} />
        <Stack.Screen name="EditCard" component={EditCard} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="BookCard" component={BookCard} />
        <Stack.Screen name="BookCardDetails" component={BookCardDetails} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermConditions" component={TermConditions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
