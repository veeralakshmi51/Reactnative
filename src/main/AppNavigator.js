// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';
// import Splash from '../screens/Splash';
// import Login from '../screens/Login';
// import GetStarted from '../screens/GetStarted';
// import VitalsReport from '../screens/VitalsReport';
// import Termsandconditions from '../screens/Termsandconditions';
// import HomeScreen from '../screens/HomeScreen';
// import Region from '../screens/Region';

// const Stack=createStackNavigator()
// const AppNavigator = () => {
//   return (
//    <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
//         <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
//         <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown:false}}/>
//         <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
//         <Stack.Screen name='VitalsReport' component={VitalsReport}/>
//         <Stack.Screen name='Termsandconditions' component={Termsandconditions} options={{headerShown:false}}/>
//         <Stack.Screen name='Region' component={Region} options={{headerShown:false}}/>
//     </Stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default AppNavigator

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import GetStarted from '../screens/GetStarted';
import VitalsReport from '../screens/VitalsReport';
import Termsandconditions from '../screens/Termsandconditions';
import HomeScreen from '../screens/HomeScreen';
import Region from '../screens/Region';
import UserProfile from '../screens/UserProfile';
import Devices from '../screens/Devices';
import HeartRate from '../../vitalspages/HeartRate';
import BloodPressure from '../../vitalspages/BloodPressure';
import Oxygen from '../../vitalspages/OxygenLevel';
import Respiration from '../../vitalspages/RespirationLevel';
import Scanner from '../screens/Scanner';
import BluetoothManager from '../screens/BluetoothManager';
import Register from '../screens/Register';
import ScannedList from '../screens/ScannedList';
import ProfileDetails from '../screens/ProfileDetails';
import { UserProvider } from '../Context/UserContext';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === 'Dashboard') {
            iconName = focused ? 'fitness' : 'fitness-outline';
          } else if (rn === 'VitalsReport') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (rn === 'Device') {
            iconName = focused ? 'watch' : 'watch-outline';
          } else if (rn === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#1A1A1A',
        },
      })}>
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="VitalsReport"
        component={VitalsReport}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Device"
        component={Devices}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <UserProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="VitalsReport" component={VitalsReport} />
        <Stack.Screen
          name="Termsandconditions"
          component={Termsandconditions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Region"
          component={Region}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeartRate"
          component={HeartRate}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BloodPressure"
          component={BloodPressure}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OxygenLevel"
          component={Oxygen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RespirationLevel"
          component={Respiration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BluetoothManager"
          component={BluetoothManager}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
        <Stack.Screen name='ScannedList' component={ScannedList} options={{headerShown:false}}/>
        <Stack.Screen name='ProfileDetails' component={ProfileDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
};

export default AppNavigator;
