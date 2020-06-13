import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground, Alert}from 'react-native';
import { Icon,Input,Button} from 'react-native-elements';

export default class FAQ extends Component{
    constructor(props)
    {
        super(props);
       
    }
    static navigationOptions={
        title:'FAQs'
    }
    render(){
        return(<View>
                <Text>FAQs</Text>
            </View>)
    }
}