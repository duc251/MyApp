import * as React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import AlphabetFlatList from "@yoonzm/react-native-alphabet-flat-list"
 

function HistoryScreen() { 
   
   
  const [input, setInput] = React.useState("");
 
  const contacts = [

    {
      id: 1,
      name: 'Nguyễn Tiến Nam',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/phone_24px@2x.png',
      day:'Hôm Nay',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
      
    },
    {
      id: 2,
      name: 'Vũ Mạnh Linh',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/phone_24px@2x.png',
      day:'Hôm Nay',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
    {
      id: 3,
      name: 'Trần Thái Hà',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/phone_24px@2x.png',
      day:'Hôm Nay',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
    {
      id: 4,
      name: 'Lê Ngọc Linh',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/phone_24px@2x.png',
      day:'Thứ Tư',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
    {
      id: 5,
      name: 'Thái Thùy Trang',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/phone_24px@2x.png',
      day:'Thứ Tư',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
    {
      id: 6,
      name: 'Thái Lê Kiều',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/phone_24px@2x.png',
      day:'Thứ Ba',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
    {
      id: 8,
      name: 'Bảo Ngọc',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/phone_24px@2x.png',
      day:'Thứ Hai',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
    {
      id: 9,
      name: 'Dương Lê',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/missed_video_call_24px@2x.png',
      day:'Thứ Hai',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
    {
      id: 10,
      name: 'Duc dep zai vjp-pro',
      status: '0977272123',
      image: '/Users/apple/MyApp/src/assets/missed_video_call_24px@2x.png',
      day:'Thứ Hai',
      icon:'/Users/apple/MyApp/src/assets/info_outline_24px.png'
    },
  ]


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.day}</Text>
              <Image source={{ uri: item.icon}} style={styles.icon} />
            </View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
              
            </View>
            
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  
  return (
    <View style={styles.container}>
      
       <FlatList
        data={contacts}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={renderItem}
      />
    </View>
  );

  
};

 
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    padding: 16,
    height:64,
  },
  input:{
    backgroundColor:' #F2F2F2',
    borderRadius:6,
    padding:10,
    left:10,
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 40,
    height: 40,
     
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
     
    fontStyle:'normal',
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 16,
    width:128,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    
    fontWeight: '400',
    color: '#828282',
    fontSize: 14,
    marginLeft: 15,
    letterSpacing:0.12,
    lineHeight:16,
  },
  daytxt:{
     
    fontWeight: '400',
    fontSize:13,
    letterSpacing:0.12,
    color:'#828282',
    
  },
  icon:{
    height:25,
    width:25,
    left:20,
  }
});

export default HistoryScreen;
