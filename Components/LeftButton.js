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
        this.state = {
            disable : this.props.disable,
            reset : this.props.reset,
            
        }
    }
    sendData=()=>{
        //if()
        //alert(`${this.state.disable} from child`);
        const x = this.state.disable;
        const y = this.state.reset;
        this.props.sendDataFromChild(x,y); 
        //console.log(`${this.state.disable} == ${this.state.reset}`)  
       // alert(`${this.state.count}`)
    }
    
    render(){
        return(
            <TouchableHighlight 
            style = {this.state.disable === true ? styles.disableStyle:styles.activeStyle}
            //disabled = {this.state.disable}
            onPress = {this.sendData}
            >
                <Text style = {styles.text}>{this.state.reset===true?'Đặt lại':'Vòng'}</Text>
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
        fontSize:25,
        color:'white',
    }
})