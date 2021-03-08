import React from 'react';
import {StyleSheet,View,Text,Button,ImageBackground,Image,TouchableOpacity,AsyncStorage} from 'react-native';
import Writedata from './Storage';
const Splash=({navigation})=>{
 var data=[];

    return(
        <View style={styles.container}>
            <ImageBackground  style={styles.image} source={require('./images/bg.jpg')} style={{height:'100%',width:'100%'}}/>
            
              <View style={styles.logotext}>
                  <View style={styles.logo}>
                  <Image resizeMode="contain" source={require('./images/logo.png')} style={{height:'100%',width:'100%'}}/>
                   </View>

                  <View style={styles.textcontainer}>
                      <Text style={styles.text}>HELLO</Text>
                  </View>

                

              </View>
              
                
              <View style={styles.buttoncenter}>
                      <TouchableOpacity style={styles.button} onPress={async()=>{
                         var  arrayofdata= [0,'santosh','hello']
                       
                        //  console.warn(arrayofdata)
                        //l;

                        data= await AsyncStorage.getItem('detail'); 
                        //console.warn(data);
                        data= await JSON.parse(data);
                        // console.warn(data)
                    // console.warn(data)
                      if(data==null){
                       data={'logged':0,'session:':'','token':''}
                       data=await JSON.stringify(data);
                       let writedata=await Writedata()

                       // console.warn(data)
                      }
                    
                    if(data.logged==1){
                        navigation.push('welcome')
                    }
                    else navigation.navigate('Login');
                }

                       
                        }>
                            <Text style={styles.buttontext}>CLICK HERE TO LOGIN</Text>
                      </TouchableOpacity>
                   
                  </View>

             
            
           
        </View>
    )


}

const styles=StyleSheet.create({

image:{
    position:'absolute',
    top:0
},
logotext:{
    position:'absolute',
    top:'12%',
    height:70,


    width:'100%',

    

},
textcontainer:{
    alignItems:'center'
}
,
text:{

    fontSize:40,
    color:'red'
}
,
button:{
    
    width:'80%',
    justifyContent:'center',
    backgroundColor:'white',
   borderRadius:15,
   shadowColor:'black',
   shadowRadius:20,
    height:40,
    alignItems:'center'



},

buttontext:{

    
    
},
buttoncenter:{
    alignItems:'center',
    position:"absolute",
    width:'100%',
    bottom:'10%'
}
    
   
   
})
export default Splash;