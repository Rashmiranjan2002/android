import { View, Text, StyleSheet, FlatList, TouchableOpacity,TextInput, ScrollView } from 'react-native'
import React, { useState ,useEffect} from 'react'
import Header from './componets/Header'
import { Image } from 'react-native-animatable'
import Button from './Button'
import success from './Success'
let DaysList=[];
const Appointmentbook = ({navigation}) => {
    const [selectedSlot, setselectedSlot]=useState(-1);
    const[selectedGender,setselectedGender]=useState(0);
    const [selectedDay, setSelectedDay] = useState(-1);
    const [slots, setSlots] = useState([
        {sloT: '10:00-12:00PM', selected: false},
        {sloT: '12:00-02:00PM', selected: false},
        {sloT: '02:00-04:00PM', selected: false},
        {sloT: '04:00-06:00PM', selected: false},
        {sloT: '06:00-08:00PM', selected: false},
        {sloT: '08:00-11:00PM', selected: false},
      ]);
       const [days, setDays] = useState([]);

  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({day: i, selected: false});
    }
    setDays(DaysList);
  }, []);
  const getDays = month => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };
    return (
      <ScrollView style={style.container}>
        <View style={style.container}>
            <Header icon={require('./images/back.png')} title={'Appointment Book'} />
            <Image source={require('./images/doctor.png')} style={style.doctorimg} />
            <Text style={style.name}> Doctor Rashmi</Text>
            <Text style={style.Specialist}> Skin Specialist</Text>
            <Text style={style.heading}>Select Date</Text>

<View>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={DaysList} renderItem={({item,index})=>{
        return(
            <TouchableOpacity
                       
            style={{
              width: 60,
              height: 70,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: selectedDay == index ? 'blue' : 'white',
              borderWidth: selectedDay == index ? 0 : 1,
              marginLeft: 10,
            }} 
                   
               onPress={() => {
                if(item.day<new Date().getDate()){

                }
                else{
                  setSelectedDay(index);
                }
               
                  }}>
                  <Text style={{color: selectedDay == index ? '#fff' : 'blue'}}>
                    {item.day}
                  </Text>
                       </TouchableOpacity>
        )
    }}
    />
</View>
                <Text style={style.category}> Available Slots</Text>
            <View>
                <FlatList data={['10.00-12.00 AM', '12.00-2.00 PM', '3.00-5.00 PM', '5.00-7.00 PM']}
                numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={[style.timeslot,{borderColor:selectedSlot==index?'blue':'black'},]}
                            onPress={()=>{
                                setselectedSlot(index);
                            }}>
                                <Text style={{color:selectedSlot==index?'blue':'black'}}>{item}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <Text style={style.category}> Patient Name</Text>
            <TextInput style={style.input} placeholder='Enter Patient Name' />
            <Text style={style.category}> Select Gender</Text>
            <View style={style.genderView}>
                <TouchableOpacity style={[style.gender,{borderWidth:0.5,
                borderColor:selectedGender==0?'blue':'black'}]} onPress={()=>{
                    setselectedGender(0)
                    
                }}>
                    <Image source={require('./images/male.png')} style={{height:30,width:30}} />
                    <Text style={{color:selectedGender==0?'red':'green',marginTop:10}}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.gender,{borderWidth:0.5, borderColor:selectedGender==0?'blue':'black'}]}onPress={()=>{
                    setselectedGender(1)}}>
                    <Image source={require('./images/female.png')} style={{height:30,width:30}} />
                    <Text style={{color:selectedGender==1?'blue':'violet',marginTop:10}}>Female</Text>
                </TouchableOpacity>
            </View>
            <View style={style.btnView}>

            <Button w={150} h={35} txt={'        Book now'} status={true}  onclick={() => {
              navigation.navigate('Success');
            }}/>
            
            </View>
        </View>
        </ScrollView>
    )
}

export default Appointmentbook;
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    doctorimg: {
        width: 100,
        height: 100,
        marginTop: 15,
        alignSelf: 'center',

    }, name: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 6,
    }, Specialist: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 17,
        fontWeight: '700',
        backgroundColor: 'f2f2f2',
        color: 'green',
        padding: 10,
        borderRadius: 10,
    },
    category: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 15,
        marginLeft: 15,

    },
    timeslot:{
        width:'46%',
        height:40,
        borderRadius:10,
        borderWidth:0.5,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
       
    },
    input:{
        borderRadius:10,
        borderWidth:0.5,
        width:'90%',
        height:40,
        alignSelf:'center',
        marginTop:10,
        paddingLeft:10,
    },
    genderView: {
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      },
      gender: {
        borderRadius: 10,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      btnView:{
        marginTop: 20, marginBottom: 20},
        heading:{
          color: 'black',
          fontSize: 20,
          fontWeight: '700',
          marginTop: 10,
          marginLeft: 15,
  
        },
 
      


})
