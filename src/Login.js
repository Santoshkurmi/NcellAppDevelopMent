import React,{useState} from 'react';
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

import {Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const Login=({navigation})=>{
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [login,setLogin]=useState('Login');
    const [otp,setOtp]=useState('');
    const [phone1,setPhone1]=useState('');
    const[commment,setCommment]=useState("Don't have an account? Register Now");
    const [ph,setPh]=useState('Phone');
    const[Pa,setPa]=useState('Password')

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
                          <Text style={styles.loginTitleText}>{login}</Text>
                          <View style={styles.hr}></View>


                          <View style={styles.inputBox}>
                          <Text style={styles.inputlabel}>{ph}</Text>
                          <TextInput style={styles.inputemail}  keyboardType='number-pad' onChangeText={(phone)=>{setPhone(phone);setError('');}}  textContentType='telephoneNumber'>

                           
                          </TextInput>
                          <Text style={error!=''>0 ?styles.error:styles.nothing}>{error}</Text>
                          </View>



                          <View style={styles.inputBox}>
                          <Text style={styles.inputlabel}>{Pa}</Text>
                          <TextInput style={Pa=='' ? styles.hidden:styles.input}  onChangeText={password=>setPassword(password)} secureTextEntry={true} textContentType='password'>

                            
                          </TextInput>
                          </View>

                          <TouchableOpacity style={styles.loginButton} onPress={async ()=>
                            
                            {
                                setError('');
                              if(login=='Login')  {var data=await LoginNcell(phone,password);  
                                if(data.code==0){  
                                 navigation.navigate('welcome');} else {
                                     setError(data.codeout); 
                                     Writedata()}//elseof small
                            }
                              else if(login=='Sign Up') {LoginNcell(phone,password,4).then((e)=>{
                                     if(e.code==0) {setPhone1(phone);setLogin('Verify OTP');setPh('Enter the OTP');setPa('');}else setError(e.codeout);
                                
                                })

                            } else if(login=='Verify OTP'){LoginNcell(phone1,password,5,phone).then((e)=>{if(e.code==0){setLogin('Login');setPh('Phone');setError(e.codeout);}else setError(e.codeout)});}
                            else if(login=='Password recovery'){LoginNcell(phone,password,6,phone).then((e)=>{if(e.code==0){setPhone1(phone);setLogin('Submit OTP ');setPh('Enter the OTP');setPa('');}else setError(e.codeout)});}
                            else if(login=='Submit OTP '){ LoginNcell(phone1,password,7,phone).then((e)=>{if(e.code==0){setLogin('Login');setPh('Phone');setPa('Password');setError(e.codeout)}else setError(e.codeout)});}
                            
                            

                           
                            //
                            //var code=await data.code;
                              

                                }
                            
                            
                            }>
                              <Text style={styles.loginButtonText}>{login}</Text>

                          </TouchableOpacity>

                          <TouchableOpacity  onPress={()=>

                    {   if(login=='Login'){ setLogin('Sign Up')
                            setError('')
                           setCommment('Login here')
                           setPa('Password')
                        }
                        else if(login=='Sign Up' ||login=='Verify OTP' ||login=='Password recovery'){setLogin('Login');setPa('Password'); setCommment("Don't have an account? Register Now");setError('')}
                       
          
       



}} >
                              <Text style={styles.registerText}>{commment}</Text>
                              
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=>{
                              setLogin('Password recovery')
                               setError('')
                               setPh('Phone')
                               setCommment('Login here')
                               setPa('Password')
                             


                          }}>
                              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                              
                          </TouchableOpacity>



                      </View>
                  </View>
                  
             </View>

         </TouchableWithoutFeedback>





    )
}



export default Login;