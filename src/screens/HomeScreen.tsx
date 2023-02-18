import * as React from 'react';
import {View, Text, Image, FlatList, StatusBar, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

 
   


 
 


function HomeScreen() { 
   
   
  const [input, setInput] = React.useState("");

  const contacts = [
    {
      id: 1,
      name: 'Nguyễn Tiến Nam',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 2,
      name: 'Vũ Mạnh Linh',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 3,
      name: 'Trần Thái Hà',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
    {
      id: 4,
      name: 'Lê Ngọc Linh',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 5,
      name: 'Thái Thùy Trang',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      id: 6,
      name: 'Thái Lê Kiều',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
    {
      id: 8,
      name: 'Bảo Ngọc',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 9,
      name: 'Dương Lê',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 10,
      name: 'Duc dep zai vjp-pro',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
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
      <View>
        <TextInput
          placeholder="timkiem"
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.input} />
      </View>
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
    backgroundColor:'#ffffff',
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
});

export default HomeScreen;
