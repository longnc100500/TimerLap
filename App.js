/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import LeftButton from './Components/LeftButton';
import RightButton from './Components/RightButton';

class Clock extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.containerSub}>
            <View style={{flex:2}}></View>
            <View style = {styles.containerBoth}>
              <View style={styles.counterContainer}>
              <Text style = {{fontSize:60,color:'white'}}>00:00,12</Text>  
              </View>
              
            </View>
            <View style = {styles.btnContainer}>
                <LeftButton/>
                <RightButton/>
              </View>
          </View>


          <View style = {styles.listResults}>

          </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  containerSub:{
    flex:6,
    flexDirection:'column',
    },
  listResults:{
    flex:4,
    
    
  },
   containerBoth:{
     flexDirection:'column',
     flex:3,
     
     justifyContent:'center',
     alignItems:'center',

   },
  
  btnContainer:{
    flexDirection:'row',
    paddingHorizontal:30,
    flex:2,
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingBottom:30,
    },
  counterContainer:{
    flex :3,
    justifyContent:'center',
    alignItems:'center',
  }

});
module.exports = Clock;


