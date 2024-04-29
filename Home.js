import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import Header from './componets/Header';
import Button from './Button';





const Home = ({navigation}) => {
  return (
    <View style={style.container}>

      <Header title='Doctor appointment' icon={require('./images/logo1.png')} />
      <Image source={require('./images/banner.jpg')} style={style.banner} />
      <Text style={style.category}> Select Category</Text>
      <View style={{ mariginTop: 20 }}>
        <FlatList data={[1, 1, 1, 1, 1, 1]} horizontal renderItem={({ item, index }) => {
          return (
            <TouchableOpacity>
              <LinearGradient colors={['#009FFD', '#2A2A72',]} style={style.LinearGradient}>
                <Text style={style.text}> {'Category' + " " + index + 1}</Text>
              </LinearGradient>
            </TouchableOpacity>

          )
        }} />
      </View>

      <Text style={style.category}> Top Rated Doctors</Text>
      <View style={{ mariginTop: 20, alignItems: 'center' }}></View>

      <FlatList
        numColumns={2}
        data={[{ name: 'Doctor1', specialization: 'Skin specialist' }, { name: 'Doctor2', specialization: 'Cardiologist' }, { name: 'Doctor3', specialization: 'Neurologist' }, { name: 'Doctor4', specialization: 'Dentist' }]}
        renderItem={({ item, index }) => {
          return (
            <View style={style.doctorsitem}>
              <Image source={require('./images/doctor2.png')} style={style.doctorimage} />
              <Text style={style.doctorname}>{item.name}</Text>
              <Text style={style.specialization}>{item.specialization}</Text>
              <Text style=
                {[style.special, { color: index / 2 == 0 ? 'green' : 'red' },]}>{index / 2 == 0 ? 'available' : 
                'busy'}</Text>
                
              <Button w={150} h={30} 
              status={index / 2 == 0 ?true:false}
              borderRadius={40} txt={'   Book Appointment'} onclick={()=>{
                if(index / 2 == 0 ){
                  navigation.navigate('Appointmentbook')
                  
                }

              }}  />
            </View>
          );
        }}
      />

    </View>
  );
};

export default Home;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,

  },
  category: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  LinearGradient: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  doctorsitem: {
    width: '46%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,

  },
  doctorimage: {
    height: 80,
    width: 80,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  doctorname: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 5,


  },
  specialization: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 1,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  special: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop:3,
  }



})

