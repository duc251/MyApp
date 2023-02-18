import { NavigationContainerRef } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
 

export const navigationRef = React.createRef<NavigationContainerRef<any>>();


export const navigation =()=> navigationRef.current!;

  
  


 

 
