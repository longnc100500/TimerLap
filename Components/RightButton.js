import React  from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
export default class RightButton extends React.Component{
    constructor(props){
        super(props);
        
    }
    sendData=()=>{
        this.props.sendDataFromChild(!this.props.started)
    }
    render(){
        return(
            <TouchableHighlight 
            style = {this.props.started === true ? styles.isRunning:styles.isPause}
            onPress = {this.sendData}
            >
                <Text style = {styles.text}>{this.props.started === true ? 'Tạm dừng':'Bắt đầu'}</Text>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    isRunning:{
        width:70,
        height:70,
        borderWidth:1,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red'
    },
    text:{
        fontSize:20,
        color:'white'
    },
    isPause:{
        width:70,
        height:70,
        borderWidth:1,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'green'
    },
})