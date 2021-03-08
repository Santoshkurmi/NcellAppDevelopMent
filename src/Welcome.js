import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View,StyleSheet,Text,AsyncStorage,Button,ScrollView,TouchableOpacity} from 'react-native';
import Writedata from './Storage';
import Login from './Login';
import Splash from './Splash';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicans from 'react-native-vector-icons/Ionicons';
import LoginNcell from './Network';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AntIcons from 'react-native-vector-icons/AntDesign';





//import {BarsOutlined} from 'ant-design/icons';



//console.disableYellowBox = true;

const Welcome=({route,navigation})=>{
   // const name=route.params.name;
    const [result,setResult]=useState('Loading');
    const [customer,setCustomer]=useState('Loading..');
    
    const [scroll,setScroll]=useState([{}])
    const [nbr,setNbr]=useState('Loading');

    useEffect(()=>{
        var array=[];
        var count=0;
        LoginNcell('','',19).then((people)=>{if(people.code==0){ setCustomer(people.result.SUBS.SUBS_CUST.CUST_NAME);setNbr(people.result.SUBS.SUBS_BASE_DETAIL.ACC_NBR); }
         else   navigation.navigate('Login');});
        LoginNcell('','',2).then((data)=>{if(data.code==0){ setResult(data.result); }
         else   navigation.navigate('Login');});
        LoginNcell('','',3).then(async(e)=>{
                  
         if(e.code==5) navigation.navigate('Login')
         else{
          var hello=e.result;
         
            
          Object.values(hello).map(( key,index,value)=>{
           
           // console.warn(key.length)
          
            if(key.length>0) key.map((key1,index,value)=>{
                count=count+1;
              array[count-1]=key1;})
  
           }) 
           setScroll(array);}  })//then cas

    },[])
  
   

      
     //console.warn('hello')
      

      
    
  
 return(   <View style={styles.container}>
                  <View style={styles.title}> 
                       <EvilIcons name='navicon' color='black' size={30} onPress={()=>navigation.openDrawer()}/>
                       <Text style={styles.headline}>Dashboard</Text>
                       <AntIcons name="logout" size={23} color="#000" onPress={()=>{Writedata();
                       navigation.navigate('Login')
                         }} />
                       
                      
                       <Ionicans name="md-notifications-outline" size={28} color="#000" />
                    </View>
                  
                    <Text style={styles.account}>Account Detail</Text>
                    <Text style={styles.name}>{customer}</Text>
                   
                    <View style={styles.box}>
                        <View style={styles.one}><Text>Balance Rs.</Text><Text>{result.LOCAL_BAL}</Text></View>
                        <View style={styles.two}><Text>Mobile Data</Text><Text>{result.DATA_BAL} MB</Text></View>
                        <View style={styles.three}><Text>Sms Pack</Text><Text>{result.SMS_BAL} items</Text></View>
                    </View>

                    <View style={styles.boxlarge}><Text>{nbr} </Text></View>

                    <Text style={styles.downheader}>Last Records Overview</Text>
                
            


                    <View style={styles.list}>
                   <View style={styles.listone }></View>
                   
                   
                   <ScrollView showsVerticalScrollIndicator={false}  style={styles.scrollview}><View style={styles.baby}>
                     
      {
        scroll.map((app,value,index)=>{

           
            return <View key={value} style={styles.listtwo}>
            <Text>Type: {app.ACCT_RES_NAME}</Text>
            <Text>Balance: {app.REAL_BAL}/{app.GROSS_BAL}  {app.UNIT_NAME}</Text>
            <Text>Expiry: {app.EXP_DATE} </Text>
            </View>
        })
    

      }
                       

 



                     
                  </View>
                   </ScrollView>
                   

                    </View>


            </View>
             

        
    
    )



}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#d3d3d3',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        height:'auto',
        borderWidth:0,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        position:"absolute",
        top:'8%'
    },
    headline:{
        fontSize:20,
        fontWeight:'bold'
    },
    
    account:{
        
        top:"18%",
        
        position:"absolute",
        fontSize:15,
       
        fontWeight:'bold',
       
        width:'95%'
    },
    name:{
        
        top:"18%",
        left:"50%",
        position:"absolute",
        fontSize:14,
       
        fontWeight:'bold',
       
        width:'95%'
    },
    box:{
          flexDirection:'row',
          justifyContent:'space-around',
          width:'100%',
          position:'absolute',
          top:'23%'
    },
    one:{
        height:70,
        borderRadius:15,
        width:'30%',
        backgroundColor:'#f469a9',
        justifyContent:'center',
        alignItems:'center'
    },
    two:{
        height:70,
        borderRadius:15,
        
        width:'30%',
        backgroundColor:'#f8615a',
        justifyContent:'center',
        alignItems:'center'
    },
    three:{
        height:70,
        borderRadius:15,
        
        width:'30%',
        backgroundColor:'#ff1e56',
        borderWidth:0,
        borderColor:'#ddd',
        shadowColor:'black',
        elevation:3,
        justifyContent:'center',
        alignItems:'center'
        

    },
    boxlarge:{
        position:'absolute',
        backgroundColor:'#dcdcdc',
        top:'38%',
        height:80,
       
        width:'97%',
        borderWidth:1,
       
        borderRadius: 15,
        borderColor: '#ddd',
        
        shadowColor: '#000',
       
        shadowOpacity: 1,
        shadowRadius:4,
        elevation: 4,
    },
    downheader:{
        fontSize:16,
        fontWeight:'bold',
        position:'absolute',
        top:'52%',
       
        width:'97%'


    },
    list:{
         width:'100%',
         position:"absolute",
         top:'57%',
         alignItems:'center',
         justifyContent:'space-around'

    },
   scrollview:{
       width:"97%",
       
       height:340
    },
       baby:{
       justifyContent:'center',
       alignItems:'center'
       },
    
     

   
    listtwo:{
        height:80,
        width:'97%',
        backgroundColor:'#dcdcdc',
       
        marginVertical:4,
        borderRadius:15,
        backgroundColor:'#f8615a',
        justifyContent:'center',
        alignItems:'center',
    
    },
    button:{
        position:'absolute',
        top:'90%'
    }
})
export default Welcome;