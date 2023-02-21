import React from "react";
import {View, StyleSheet, Image, Touchable} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import { Avatar, Caption, Drawer, Text, Title} from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
    {
      value: '1',
      lable: 'All',
      image: '/Users/apple/MyApp/src/assets/assignment_ind_24px.png',
      
    },
    {
      value: '2',
      lable: 'General',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '3',
      lable: 'Investors',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '4',
      lable: 'Lead',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '5',
      lable: 'Lead',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
  ];

export function DrawerConten(props){
  
    return(
        <View style={{flex:1,}}> 
            <DrawerContentScrollView { ... props}>
                <View >
                    <View style={styles.top}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Image source={require('/Users/apple/MyApp/src/assets/Ellipse.png')} style={styles.image}/>
                            <View>
                                <Title style={styles.title}>Nguyễn Tiến Nam</Title>
                                <Caption style={styles.title}>Admin Admin</Caption>
                            </View>
                        </View>
                    </View>
                         <View style={styles.colection} >
                            <TouchableOpacity style={{flexDirection:'row',marginTop:10}}>
                                <Image source={require('/Users/apple/MyApp/src/assets/add_box_24px2x.png')}/>
                                <View>
                                     <Text style={styles.Text2}> New collection </Text>
                                </View>
                            </TouchableOpacity>
                         </View>
                         <SelectCountry
                            style={styles.dropdown}
                            selectedTextStyle={styles.selectedTextStyle}
                          placeholderStyle={styles.placeholderStyle}
                          imageStyle={styles.imageStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={local_data}
                          valueField="value"
                          labelField="lable"
                          imageField="image"

                          placeholder="COLLECTIONS"
        
        onChange={e => {
          setCountry(e.value);
        }}
      />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
top:{
    backgroundColor:'#F2A54A',
},
image:{
width:40,
height:40,
left:20,
},
title:{
color:'#FFFFFF',
letterSpacing:0.12,
fontSize:16,
left:28,
top:-10,
},
colection:{
backgroundColor:'#FFFFFF',
height:44,
},
Text2:{
top:12,
},
dropdown: {
     top:8,
    height: 44,
    borderBottomColor: 'gray',
     backgroundColor:'rgba(242, 165, 74, 0.1)'
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})