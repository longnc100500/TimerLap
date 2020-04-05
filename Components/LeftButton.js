import React  from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
export default class LeftButton extends React.Component{
    constructor(props){
        super(props);
        
    }
    sendData=()=>{
        this.props.sendDataFromChild();
    }
    
    render(){
        return(
            <TouchableHighlight 
            style = {this.props.reset === true ? styles.disableStyle: this.props.disable ===false ? styles.activeStyle:styles.disableStyleFirstTime}
            disabled = {this.props.disable}
            onPress = {this.sendData}
            >
                <Text style = {styles.text}>{this.props.reset===true?'Đặt lại':'Vòng'}</Text>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        width:70,
        height:70,
        borderWidth:1,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'white',
        
    },
    disableStyle:{
        width:70,
        height:70,
        borderWidth:1,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'lightgray',
        
    },
    disableStyleFirstTime:{
        width:70,
        height:70,
        borderWidth:1,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'lightgray',
    },
    activeStyle:{
        width:70,
        height:70,
        borderWidth:3,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'green',
        
    },
    text:{
        fontSize:20,
        color:'white',
    }
})