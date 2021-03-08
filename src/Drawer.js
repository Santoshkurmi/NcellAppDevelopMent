import React from 'react';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {View,Button,Image,StyleSheet} from 'react-native';
import Welcome from './Welcome';
import Transfer from './Transfer';
import AntIcons from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Text,Avatar,Title,Caption,Paragraph,Drawer as Drawer1,TouchableRipple,Switch} from 'react-native-paper';




const Drawer = createDrawerNavigator();

const DrawerHome=()=>{

    function CustomDrawerContent(props) {
       

        return (

            <View style={styles.container} >
                  <View style={styles.userinfo}>
           

           <Avatar.Image source={require('./images/man.png')} />
           <View style={styles.userdetail}>
           <Title>Santosh Kurmi</Title>
           <Caption>9824486108</Caption>
           
           
          
           </View>
        
          </View >
          <DrawerContentScrollView {...props}>
          

          <Drawer1.Section>
           <View style={styles.option}>
            <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="home" size={23} color="#000"/>}
              label="Home"
              onPress={()=>props.navigation.navigate('Home')}
            />

          

<DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <MaterialCommunityIcons name="bank-transfer" size={23} color="#000"/>}
              label="Transfer Amount"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
             <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="message1" size={23} color="#000"/>}
              label="Send Message"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
             <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <EntypoIcon name="paper-plane" size={23} color="#000"/>}
              label="Activate Services"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
             <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="Trophy" size={23} color="#000"/>}
              label="Change Plans"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
             <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="frown" size={23} color="#000"/>}
              label="Loan"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
             <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="phone" size={23} color="#000"/>}
              label="Call Detail"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
             <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="profile" size={23} color="#000"/>}
              label="Check SIM Details"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
             <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="delete" size={23} color="#000"/>}
              label="Account Deactivation"
              onPress={()=>props.navigation.navigate('Transfer Amount')}
            />
            
            </View>

            </Drawer1.Section>
             
         
        
         </DrawerContentScrollView>

          <Drawer1.Section>
           <View style={styles.option}>
            <DrawerItem
            activeBackgroundColor={'red'}
            icon={()=> <AntIcons name="logout" size={23} color="#000"/>}
              label="Logout"
              onPress={()=>props.navigation.navigate('Login')}
            />
            </View>

            </Drawer1.Section>


              

           
          
          </View>
        );
      }

    return(
           
          <Drawer.Navigator drawerStyle={{backgroundColor:'#d3d3d3',width:"88%"}} 
          initialRouteName={'Home'} backBehavior={'order'}
          drawerType={'slide'} edgeWidth={600} drawerContent={CustomDrawerContent} drawerContentOptions=
          {{activeBackgroundColor:'red'}}>



           <Drawer.Screen activeBackgroundColor='red' name='Home' component={Welcome} options={{drawerIcon:()=> <EvilIcons name='navicon' color='black' size={30}/>}}/>
           <Drawer.Screen  name='Transfer Amount' component={Transfer}/>


                                     
                                    
          </Drawer.Navigator>)


          
}

const styles=StyleSheet.create({
    container: {flex: 1,marginTop:60,marginLeft:20},
    userinfo:{flexDirection:'row',alignItems:'center'},
    userdetail:{marginLeft:10,flexDirection:'row',
    flexDirection:'column'
    
    },



})

export default DrawerHome;

