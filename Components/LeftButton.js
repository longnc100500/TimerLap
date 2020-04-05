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
            disable : true,
            pause : false,
        }
    }
    
    render(){
        return(
            <TouchableHighlight style = {styles.button} >
                <Text style = {styles.text}>Start</Text>
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
    text:{
        fontSize:25,
        color:'white',
    }
})