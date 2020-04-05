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
  FlatList,
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
    this.state = {
      leftDisable:true,
      leftReset:false,
      rightStarted:false,
      results:[],
      time :0,
      id:null 
    };
  }
  timer=()=>{
    let ID = setInterval(()=>{
      this.setState(pre=>{
        return {time:pre.time+10};
      })
    },10)
    this.setState({id:ID});
  }
  add(){
    let x = [...this.state.results,this.convertTime()];
    this.setState({results:x});
    console.log('Add new #Lap' + this.state.results);
  }
  convertTime(){
    const time = this.state.time;
    let min = parseInt(time / 60000);
    let s = parseInt((time %60000)/1000);//154000
    let ss = parseInt(((time%60000)%1000)/10);
    let str = '';
    if(min<10)
      str +=`0${min}:`;
    else
      str +=`${min}:`;
    if(s<10)
      str+=`0${s},`;
      else
      str+=`${s},`;
    if(ss<10)
    str+=`0${ss}`;
    else
    str+=`${ss}`;
    return str;

  }
  getDataFromLeftButton = ()=>{
      //alert('get');
      if(this.state.rightStarted === false)
      {
        //clearInterval(this.state.id);
        this.setState(pre=>{
        return {leftReset:false,leftDisable:true,rightStarted:false,results:[],time:0};
      });
      }
      else
      {
        //clearInterval(this.state.id);
        console.log(this.state.id);
        this.add();
      }
      //alert(`disable=${this.state.leftDisable} reset = ${this.state.leftReset}`);
  }
  getDataFromRightButton=(rightBtnIsStarted)=>{
    if(this.state.rightStarted===false)
        this.timer();
    if(this.state.rightStarted===true)
        clearInterval(this.state.id); 
    
    if(this.state.results.length===0)
    {
      //this.timer();
      this.setState(pre=>{
       
        return {rightStarted:rightBtnIsStarted,leftDisable:!pre.leftDisable}
        })

    }else{
      //this.timer();
    this.setState(pre=>{
      return {rightStarted:rightBtnIsStarted,leftReset:!pre.leftReset}
      })
    }
  }
  flastlistSeparator(){
    console.log('i were called');
    return (
      <View style={{color:'white',height:2,width:'100%'}}>

      </View>
    )
  }
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.containerSub}>
            <View style={{flex:2}}></View>
            <View style = {styles.containerBoth}>
              <View style={styles.counterContainer}>
                <Text style = {{fontSize:60,color:'white'}}>{this.convertTime()}</Text>  
              </View>
              
            </View>
            <View style = {styles.btnContainer}>
                <LeftButton disable = {this.state.leftDisable} 
                reset = {this.state.leftReset}
                count = {this.state.count} 
                sendDataFromChild = {this.getDataFromLeftButton} />
                <RightButton
                started = {this.state.rightStarted}
                sendDataFromChild = {this.getDataFromRightButton}
                />
              </View>
          </View>
            

          <View style = {styles.listResults}>
          <FlatList
          style={{margin:20}}
            data = {this.state.results}
            renderItem = {(item)=>{
              return(
              <Text style={styles.textInItem}>{`#${item.index}    `}{item.item}</Text>
              )
            }}
            keyExtractor = {(item,index)=>(index.toString())}
            ItemSeparatorComponent = {()=>{
              return (
                <View style={{color:'white',height:2,width:'100%'}}>
          
                </View>
              )
            }}
            />
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
    
    //backgroundColor:'white',
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
  },
  
  textInItem:{
    fontSize:20,
    color:'white',
    //marginVertical:10,
  }


});
module.exports = Clock;


