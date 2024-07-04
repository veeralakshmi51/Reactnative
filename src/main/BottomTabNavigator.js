import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab=createBottomTabNavigator();
import HomeScreen from '../screens/HomeScreen';
import VitalsReport from '../screens/VitalsReport';
import UserProfile from '../screens/UserProfile';
import Devices from '../screens/Devices';
import Icons from 'react-native-vector-icons/Ionicons';
const homename='Dashboard';
const reportname='VitalsReport';
const devices='Device';
const userprofile='Profile'
const BottomTabNavigator = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator initialRouteName='HomeScreen' screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName;
            let rn=route.name
            if(rn===homename){
                iconName=focused?'fitness':'fitness-outline'
            } else if(rn===reportname){
                iconName=focused?'document-text':'document-text-outline'
            } else if(rn===devices){
                iconName=focused?'watch':'watch-outline'
            } else (rn===userprofile)
            {
                iconName=focused?'person-sharp':'person-outline'
            }
            return <Icons iconName={iconName} size={size} color={color}/>
        }
        
    })}
    tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'grey',
    }}
    >
    <Tab.Screen name={homename} component={HomeScreen}/>
    <Tab.Screen name={reportname} component={VitalsReport}/>
    <Tab.Screen name={devices} component={Devices}/>
    <Tab.Screen name={userprofile} component={UserProfile} />
    </Tab.Navigator>
   </NavigationContainer>
  )
}

export default BottomTabNavigator