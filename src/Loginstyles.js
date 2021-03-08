import {Dimensions, StyleSheet} from 'react-native';
const styles=StyleSheet.create({

container:{
    flex:1,
    position:"relative",
  
    
},
error:{
    backgroundColor:"#ff4757",
  
    alignSelf:'center',
    marginTop:8,
    borderRadius:5,
    fontSize:16,
    paddingHorizontal:8


}
,
bigCircle:{
width:Dimensions.get('window').height*0.7,
height:Dimensions.get('window').height*0.7,
backgroundColor:'#ff6b81',
borderRadius:1000,
position:"absolute",
right:Dimensions.get('window').width*0.25,
top:-50,


},

smallCircle:{
width:Dimensions.get('window').height*0.4,
height:Dimensions.get('window').height*0.4,
backgroundColor:'#ff7979',
borderRadius:1000,
position:'absolute',
bottom:Dimensions.get('window').width* -0.2,
right:Dimensions.get('window').width* -0.2,
},

centerizedView:{
    width:'100%',
    top:'15%',
   

},

authBox:{
    width:'80%',
    backgroundColor:'#fafafa',
    borderRadius:20,
    alignSelf:"center",
    paddingHorizontal:14,
    paddingBottom:30,
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:2,},
    shadowRadius:3.84,
    elevation:5,

},

logoBox:{
backgroundColor:'#eb4d4b',
width:100,
height:100,
borderRadius:1000,
alignSelf:'center',
alignItems:'center',
justifyContent:'center',
top:-50,
marginBottom:-50,
shadowColor:'#000',
shadowOffset:{width:0,height:1},
shadowOpacity:0.2,
shadowRadius:1.41,
elevation:2
},

loginTitleText:{
    fontSize:26,
    fontWeight:'bold',
    marginTop:10
},

hr:{
width:'100%',
height:0.5,
backgroundColor:'#444',
marginTop:6

},

inputBox:{
    marginTop:10
},

inputlabel:{
    fontSize:18,
    marginBottom:6
},
dropdown:{
    backgroundColor:'#dfe4ea',marginTop:20,height:40
},
hidden:{
    height:0,
    width:0
},

inputemail:{

    width:'100%',
    height:40,
    backgroundColor:'#dfe4ea',
    borderRadius:4,
    paddingHorizontal:10,
    
},
input:{

    width:'100%',
    height:40,
    backgroundColor:'#dfe4ea',
    borderRadius:4,
    paddingHorizontal:10,
    
},
hidden:{
    width:'0%',
    height:0,
   
    backfaceVisibility:'hidden'
},
loginButton:{
    backgroundColor:'#ff4757',
    marginTop:10,
    paddingVertical:10,
    borderRadius:4
},
loginButtonText:{

  color:'#fff',
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold'  
},

registerText:{

    textAlign:'center',
    fontSize:16,
    marginTop:20
},
forgotPasswordText:{
    textAlign:'center',
    marginTop:12,
    fontSize:16
}

































});
export default styles;