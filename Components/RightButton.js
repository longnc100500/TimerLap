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
        this.state = {}
    }
    render(){
        return(
            <TouchableHighlight style = {styles.button}>
                <Text style = {styles.text}>Stop</Text>
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
        borderColor:'white'
    },
    text:{
        fontSize:25,
        color:'white'
    }
})