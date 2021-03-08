import React,{useState,useEffect} from 'react';
import {View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    AsyncStorage,
    
} from 'react-native';
import styles from './Loginstyles.js';
import LoginNcell from './Network';
import Writedata from './Storage';
import ModalDropdown from 'react-native-modal-dropdown';

import {Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login.js';

const Transfer=({navigation})=>{
    const [phone,setPhone]=useState('');
    
    const [error,setError]=useState('');
   
   
    const [phone1,setPhone1]=useState('');
   
    const [ph,setPh]=useState('Phone');
    const[button,setButton]=useState('Send')
       var count=0;
       const [code,setCode]=useState('');
       const [value,setValue]=useState(['Loading']);
       const [res,setRes]=useState('');
       const [amount,setAmount]=useState('');
       const [amountt,setAmountt]=useState('Amount');
       const [show,setShow]=useState(true)
       const[detailbal,SetDetailBal]=useState('')
       const [detailbalone,setB]=useState('');
       const [unit,setUnit]=useState('');
       const [unit1,setUnit1]=useState('');
          useEffect(()=>{
           
           getcode();



          },[])
      
 function getcode() {


    

  LoginNcell('','',3).then(async(e)=>{
    var array=[];
    var count=0;
    var values=[];
    var bal=[];
    var unit=[];
        
      if(e.code==5) navigation.navigate('Login')
      else{
       var hello=e.result;
      
         
       Object.values(hello).map(( key,index,value)=>{
        
        // console.warn(key.length)
       
         if(key.length>0) key.map((key1,index,value)=>{
             count=count+1;
             console.war
           array[count]=key1.ACCT_RES_ID;
           values[count]=key1.ACCT_RES_NAME;
           bal[count]=key1.REAL_BAL+' '+key1.UNIT_NAME;
           unit[count]=key1.UNIT_NAME;



          })//second map

        }) //first map
       } 
       array[0]='Local Currency';
       values[0]='Main Balance';
       unit[0]='Rs.';
       setUnit(unit);
       setCode(array);
         setValue(values);
         SetDetailBal(bal);
         
        //  console.warn(array)
        //  console.warn(values)
      })
      

     
 }


    return(
       
         <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
             <View style={styles.container}>
                  <View style={styles.bigCircle}></View>
                  <View style={styles.smallCircle}></View>

                  <View style={styles.centerizedView}>
                      <View style={styles.authBox}>
                          <View style={styles.logoBox}>
                              <Icon color="#fff" name='comments' type='font-awesome' size={50}/>
                          </View>
                          <Text style={styles.loginTitleText}>Transfer Amount</Text>
                          <View style={styles.hr}></View>


                          <View style={styles.inputBox}>
                          <Text style={styles.inputlabel}>{ph}</Text>
                          <TextInput style={styles.inputemail}  keyboardType='number-pad' onChangeText={(phone)=>{setPhone(phone);setError('');}}  textContentType='telephoneNumber'>

                           
                          </TextInput>


                          <Text style={styles.inputlabel}>{amountt}               {detailbalone}</Text>
                          <TextInput style={amountt=='' ? styles.hidden:styles.inputemail}  keyboardType='number-pad' onChangeText={(phone)=>{setAmount(phone);setError('');}}  textContentType='telephoneNumber'>

                           
                          </TextInput>

                          <ModalDropdown options={value} dropdownTextStyle={show? {fontSize:18,color:'black'}:{fontSize:0,color:'white'}} dropdownTextHighlightStyle={{color:'red',backgroundColor:'pink'}} textStyle={{fontSize:18}} defaultValue='Type of transfer' style={show ? styles.dropdown:styles.hidden} dropdownStyle={{width:'70%'}}
                           onSelect={(e)=>{ setRes(code[e]);setB(detailbal[e]);setUnit1(unit[e]);
                        
                              
                        }}/>



                          <Text style={error.length ?styles.error:styles.nothing}>{error}</Text>
                          </View>



                        

                          <TouchableOpacity style={styles.loginButton} onPress={async ()=>
                            
                            {  
                                setError('');
                              if(ph=='Phone')  {var data=await LoginNcell(phone,'',11);  
                                if(data.code==0){ 
                                    setPhone1(phone);  setPh('Enter the OTP sent'); setShow(false);setButton('Verify');setAmountt('');setB('');

                                } else {
                                     setError(data.codeout); 
                                }
                            }


                            if(ph=='Enter the OTP sent'){


                                var data=await LoginNcell(phone1,'',12,phone,res,amount,unit1);
                                if(data.code==0){
                                    setPh('Phone');setShow(true);setButton('Send');setAmountt('Amount');setAmount('');navigation.navigate('welcome');setRes('');setPhone('');setUnit1[''];
                                } else {
                                    setError(data.codeout); 
                               }
                            }
                             

                           
                            //
                            //var code=await data.code;
                              

                                }
                            
                            
                            }>
                              <Text style={styles.loginButtonText}>{button}</Text>

                          </TouchableOpacity>

                        

                        



                      </View>
                  </View>
                  
             </View>

         </TouchableWithoutFeedback>





    )
}



export default Transfer;