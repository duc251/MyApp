import * as React from 'react';
import {  TouchableOpacity,Text,  View,  StyleSheet,ImageBackground,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
   

const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <ImageBackground source={require('/Users/apple/MyApp/src/assets/Group 63.png')} >
    </ImageBackground>
    <Image source={require('/Users/apple/MyApp/src/assets/Group1.png')} style={styles.image} ></Image> 



    <TouchableOpacity onPress={()=>{navigation.navigate('StackNavigateScreen')}}>
      <View style={styles.button1}>
      <Text style={styles.text1}>
      Đăng nhập bằng base account
      </Text>
      </View>
    </TouchableOpacity>
     
    <TouchableOpacity  onPress={()=>{navigation.navigate('StackNavigateScreen')}}>
      <View style={styles.button2}>
      <Text style={styles.text2}>
      Đăng nhập thủ công
      </Text>
      </View>
    </TouchableOpacity>
    <Text style={styles.text3} >
    Base wework
    </Text>
    <Text style={styles.text4}>
    {"Giải pháp quản lý công việc\n & dự án toàn diện cho doanh nghiệp 4.0"}
    </Text>
    <Text style={styles.text5}>
    Bạn chưa đăng nhập
    </Text>
  </View>

  
);
};

 
 
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FFFFFF',
      flex: 1,
    },
    image: {
      height:200,
      width:200,
      top:96,
      alignSelf:'center',
    },
    button1:{
      backgroundColor: '#F2A54A',
      borderRadius:4,
      height:48,
      width:300,
      alignSelf:'center',
      top:388,
    },
    button2:{
      borderWidth:1,
      borderColor:'#F2A54A',
      borderRadius:4,
      height:48,
      width:300,
      alignSelf:'center',
      top:400,
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    text1:{
       
      textAlign: 'center',
      letterSpacing:-0.24,
      fontSize:15,
      color:'#FFFFFF',
      textTransform:'uppercase',
      top:14,
    },
    text2:{
       
      textAlign: 'center',
      letterSpacing:-0.24,
      fontSize:15,
      color:'#F2A54A',
      textTransform:'uppercase',
      top:14,
    },
    text3:{
       
      textAlign: 'center',
      lineHeight:35,
      letterSpacing:-0.24,
      fontSize:30,
      color:'#F2A54A',
      top:58,
    },
    text4:{
       
      textAlign: 'center',
      fontSize:15,
      top:66,
      color:'#333333',
    },
    text5:{
       
      textAlign: 'center',
      fontSize:15,
      fontStyle:'italic',
      top:176,
      color:'#828282'
      ,
    },

  });


export default LoginScreen;
function navigateToHomeScreen() {
  throw new Error('Function not implemented.');
}

