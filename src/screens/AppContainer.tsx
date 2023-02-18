import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { NavigationContainer } from '@react-navigation/native';
 
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

 
 
import HistoryScreen from './HistoryScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import  ProfileScreen from './ProfileScreens'

const BottomStack = createBottomTabNavigator();
const RootStack = createStackNavigator();
 const StackNavigate = createStackNavigator();
//  const Drawer = createDrawerNavigator();



 const StackNavigateScreen=()=>{
    return(
        <StackNavigate.Navigator> 
        <StackNavigate.Screen 
        name='BottomStack' 
        component={BottomStackScreen} 
        options={{gestureEnabled:false,headerShown:false}}/>
       
    </StackNavigate.Navigator>
    );
    
 };
// const DrawerScreen =()=>{
//     return(
//         <Drawer.Navigator>
//             <Drawer.Screen name="HEAD" component={HomeScreen}/>
//             <Drawer.Screen name="HEAD" component={HomeScreen}/>
//             <Drawer.Screen name="HEAD" component={HomeScreen}/>
//         </Drawer.Navigator>
//     )
// }
//
const CustomTb=({children,onPress})=>(
    <TouchableOpacity style={{
        top:-32,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'gray'
    }}
    onPress={onPress}
    >
        <View style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:'white'
        }} ></View>
        {children}
    </TouchableOpacity>
)
//

const BottomStackScreen =()=>{
return(
<BottomStack.Navigator  
     screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:'#F2A54A',
            position:'absolute',
            height:76,
        }
     }}
>
    <BottomStack.Screen name={'Liên hệ'} component={HomeScreen} 
    options={{
        tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:10}}> 
                <Image  
                source={require('/Users/apple/MyApp/src/assets/assignment_ind_24px.png')}
                resizeMode="contain"
                style={
                    {
                        width:20,
                        height:18,
                        tintColor:focused? 'white':'#DADADA',
                    }
                }
                />
                    <Text style={{color:focused?'white':'#DADADA', fontSize:10,top:5,left:4,}}>
                    Danh bạ 
                    </Text> 
            </View>
        )
         }} />
     <BottomStack.Screen name='AddProfile' component={ProfileScreen} 
     options={{ tabBarIcon:({focused})=>(<Image source={require('/Users/apple/MyApp/src/assets/add_24px.png')}
     resizeMode="contain"
     style={
     {width:30,
    height:30,
    top:-32,
    }      
     }/>),
     tabBarButton:(props) =>(
        <CustomTb {...props}/>
        
     ),
     headerRight: () => (             
        <TouchableOpacity title='huy' />
      ),
     }}
     />
    <BottomStack.Screen name='History' component={HistoryScreen}
    options={{
        tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:10}}> 
                <Image  
                source={require('/Users/apple/MyApp/src/assets/watch_later_24px.png')}
                resizeMode="contain"
                style={
                    {
                        width:20,
                        height:18,
                        tintColor:focused? 'white':'#DADADA',
                    }
                }
                />
                    <Text style={{color:focused?'white':'#DADADA', fontSize:10,top:5,left:4,}}>
                    Gần đây
                    </Text>
            </View>
        )
         }} />

</BottomStack.Navigator>

);

};



export const AppContainer =()=>{
//const name=React.useRef<string> ('');
 
return(
    <NavigationContainer>
         <RootStack.Navigator>
        <RootStack.Screen
        options={{gestureEnabled:false,headerShown:false,}}
        name="Login"
        component={LoginScreen}

        />
        <RootStack.Screen name='StackNavigateScreen' component={StackNavigateScreen} options={{headerShown:false}}/>
    </RootStack.Navigator>
    </NavigationContainer>
   
);

}


export default AppContainer;