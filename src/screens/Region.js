import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Region = ({navigation}) => {
    const gotoHome=()=>{
        console.log('go to the dashboard');
        navigation.navigate('HomeScreen');
    }
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='black' barStyle='light-content'/>
      <Text style={{fontSize:20,color:'white'}}>Region</Text>
      <TouchableOpacity style={styles.buttonView} onPress={gotoHome}>
        <Text style={styles.text}>Ok</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Region

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    buttonView: {
        backgroundColor: '#ff6347',
        borderRadius: 30,
        padding: 10,
        width: 180,
        marginTop: 30,
      },
      text: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
        color: '#F5F5F5',
      },
})