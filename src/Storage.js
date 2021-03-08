import {AsyncStorage} from 'react-native';


const Writedata= async(data={'logged':0,'customer':'','session':'','token':''})=>{
    try{ 
       
    data=await JSON.stringify(data);
        const read= await AsyncStorage.setItem('detail',data);
 //console.warn('written')
 } catch(error){console.warn(error)}
    
}
export default Writedata;