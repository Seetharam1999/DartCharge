import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export  function FAQ(){
    return(<View>
            <Text>FAQ Screen</Text>
        </View>)

}


export  function Profile(){
    return(<View>
            <Text>Add Vehicle Screen</Text>
        </View>)

}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
       

    },
    header:{
        marginTop:20,
        width:'100%',
       
        alignItems:'center'
    },
    formContainer:{
        width:'95%',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:2,
        shadowColor:'grey',
        backgroundColor:'transparent',
        shadowOpacity:0.5,
        shadowOffset:{width:5,height:3}
    },
    formInput:{
        marginTop:10,
        color:'white',
        width:'98%',
    },btn:{
        marginTop:10,
        justifyContent:'center',
        
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
});
