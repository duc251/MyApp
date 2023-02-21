import * as React from 'react';
import {View, Text, Image, FlatList, StatusBar, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import SectionListSidebar from 'react-native-sectionlist-sidebar';

const ITEM_HEIGHT = 40;
function HomeScreen() { 
   
   
  const [input, setInput] = React.useState("");

  const state = {
    data: [
      { key: 'A', title: 'A', data: [{ 
        id:'1',
        name: 'Nguyễn Tiến Nam',
        status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
     }] },
     { key: 'B', title: 'B', data: [{ 
        id:'1',
        name: 'Nguyễn Tiến Nam',
        status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
     }] }, 
     { key: 'C', title: 'C', data: [ {name: 'Vũ Mạnh Linh',
     status: '0977272123',
     image: 'https://bootdey.com/img/Content/avatar/avatar6.png',}] },
      { key: 'D', title: 'D', data: [{name: 'Trần Thái Hà',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',}] },
      { key: 'E', title: 'E', data: [{name: 'Lê Ngọc Linh',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',}] },
      { key: 'F', title: 'F', data: [{name: 'Thái Thùy Trang',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',}] },
      { key: 'G', title: 'G', data: [{name: 'Thái Lê Kiều',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',}] },
      { key: 'H', title: 'H', data: [ {name: 'Bảo Ngọc',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',}] },
      { key: 'I', title: 'I', data: [ {name: 'Dương Lê',
      status: '0977272123',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',}] },
      { key: 'J', title: 'J', data: ['Jabin', 'Jace', 'Jabir'] },
      { key: 'K', title: 'K', data: ['Kaarina', 'Kacee', 'Kamal'] },
      { key: 'L', title: 'L', data: ['Liam', 'Lucas', 'Lama'] },
      { key: 'M', title: 'M', data: ['Millie', 'Matthew', 'Mohammed'] },
      { key: 'N', title: 'N', data: ['Natalie', 'Naomi', 'Nora'] },
      { key: 'O', title: 'O', data: ['Owen', 'Orion', 'Omar'] },
      { key: 'P', title: 'P', data: ['Pablo', 'Paco', 'Padarn'] },
      { key: 'Q', title: 'Q', data: ['Quan', 'Qwinitin', 'Qasim'] },
      { key: 'R', title: 'R', data: ['Rabea', 'Racheal', 'Rami'] },
      { key: 'S', title: 'S', data: ['Sophia', 'Sarah', 'Salah'] },
      { key: 'T', title: 'T', data: ['Tabby', 'Tabia', 'Talal'] },
      { key: 'U', title: 'U', data: ['Ulysses', 'Umberto', 'Ula'] },
      { key: 'V', title: 'V', data: ['Vincent', 'Valentin', 'Vance'] },
      { key: 'W', title: 'W', data: ['William', 'Weston', 'Wail'] },
      { key: 'X', title: 'X', data: ['Xavier', 'Xavi', 'Xyla'] },
      { key: 'Y', title: 'Y', data: ['Yulianna', 'Yadira', 'Yasmin'] },
      { key: 'Z', title: 'Z', data: ['Zachary', 'Zayne', 'Zain'] },
    ],
  };

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
      <SectionListSidebar
        data={state.data}
        renderItem={renderItem}
        itemHeight={ITEM_HEIGHT}
        sectionHeaderHeight={30}
        sectionHeaderTextStyle={styles.sectionHeaderTextStyle}
        sidebarContainerStyle={styles.sidebarContainerStyle}
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
  sectionHeaderTextStyle: {
    paddingTop: 7,
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
     
  },
  sidebarContainerStyle: {
    top:50,
    width: 16,
    color:'#F2A54A',
  },
});

export default HomeScreen;
