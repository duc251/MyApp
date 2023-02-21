 

import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import DrawerMenuIcon from '../assets/DrawerMenuIcon';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createDrawerNavigator }  from '@react-navigation/drawer';



const TopDrawerNavigation = () => {
  const navigation = useNavigation()

  return <View style={styles.container}>
    <TouchableHighlight style={styles.backButton} underlayColor="#f0ddcc" onPress={() => {
      navigation.openDrawer()
    }}>
      <DrawerMenuIcon color="#333" size={20} />
    </TouchableHighlight>
  </View>
  }




  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    backButton: {
      borderRadius: 8,
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center"
    }
  })
  
  export default TopDrawerNavigation