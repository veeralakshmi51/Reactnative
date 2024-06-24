import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
const logo=require('../images/logo.png')
const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('GetStarted')
        },1000)
    },[])
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#1A1A1A'/>
    <Image source={logo} style={styles.image}/>
    </View>
  )
}

export default Splash

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1A1A1A'
    },
    image:{
        height:100,
        width:100,
        // tintColor:'#A75502'
        tintColor:'#ff6347'
    }
})