import * as React from 'react';
import {View,  StyleSheet,Image,ImageBackground,TextInput, Platform, TouchableOpacity, Text} from 'react-native';
 


function ProfileScreen() {
  
  return (
    <View style={styles.container}>
    <ImageBackground source={require('/Users/apple/MyApp/src/assets/Ellipse2.png')} 
    style= {styles.image1}>
    </ImageBackground>
     
<View >
<Image source={require('/Users/apple/MyApp/src/assets/Group37.png')} style={styles.image} ></Image>
</View>
     <TextInput placeholder='Họ'
     autoCorrect={false}
     style={[styles.TextInput,]}/>
     <TextInput placeholder='Tên'
     autoCorrect={false}
     style={[styles.TextInput,]}/>
     <TextInput placeholder='Công ty'
     autoCorrect={false}
     style={[styles.TextInput,]}/>
     <TouchableOpacity style={styles.buttonAdd} >
      <View style={styles.nameContainer}>
        <Image source={require('/Users/apple/MyApp/src/assets/Group42.png')} style={styles.image2}/> 
      <Text style={styles.Text}>Thêm số điện thoại</Text>
      </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonAdd} >
      <View style={styles.nameContainer}>
        <Image source={require('/Users/apple/MyApp/src/assets/Group42.png')}style={styles.image2}/> 
      <Text style={styles.Text}>Thêm email</Text>
      </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonAdd} >
      <View style={styles.nameContainer}>
        <Image source={require('/Users/apple/MyApp/src/assets/Group42.png')}style={styles.image2}/> 
      <Text style={styles.Text}>Thêm địa chỉ</Text>
      </View>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonAdd} >
      <View style={styles.nameContainer}>
        <Image source={require('/Users/apple/MyApp/src/assets/Group42.png')}style={styles.image2}/> 
      <Text style={styles.Text}>Thêm ngày sinh</Text>
      </View>
     </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor:'#FFFFFF'
  },
  nameContainer: {
    flexDirection: 'row',
     
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
  image1:{
    borderRadius:50, top:20,
    height:90,width:90,alignSelf:'center',backgroundColor:'#F2F2F2'
  },
  image2:{
    top:22,
  },
  image: {
     
    height:30,
    width:30,
    opacity:0.7,
    alignItems:'center',
    borderColor:'#fff',
    left:30,
    top:-10,
    alignSelf:'center',
  },
  TextInput: {
    backgroundColor:'#FFFFFF',
    height:44,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    borderBottomWidth:0.5,
    borderBottomColor:'rgba(0,0,0,0.1)'
  },
  buttonAdd:{
     backgroundColor:'#FFFFFF',
     height: 64,
     top:44,
     borderBottomWidth:0.5,
    borderBottomColor:'rgba(0,0,0,0.1)',  
    
    
  },
  Text:{
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    top:22,
    left:18,
  },
});

export default ProfileScreen;
  
