import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,Alert, KeyboardAvoidingView} from 'react-native'
import { Input,Icon,Button} from 'react-native-elements';
import *as firebase from 'firebase';
export default class Login extends Component{
    constructor(){
    super();
        this.state={
        email:'',
        password:'',
        errMessage:null
    }
    }
    image=require('../assets/road.jpg');
 handleLogin=()=>{
        if(this.state.email==='' && this.state.password==='')
{
	Alert.alert("enter username/password")
}
else{
            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email,this.state.password)
            .then((user)=>{
                console.log('user logged',user.displayName);
               
        
            })
            .catch((error)=>{
                Alert.alert(error.code);
                this.setState({errMessage:error.code})
                this.setState({
                    password:''
                })
            })
        
        }
    }
    render(){
       
        
        return(
            <ImageBackground source={this.image} style={styles.image}>
        <View style={styles.container}>
	
	            <Text style={{paddingTop:10,marginTop:10,justifyContent:'center',alignItems:'center',color:'white',fontSize:32}}>
                Dart and Charge</Text>
                <View style={{paddingTop:10,backgroundColor:'transparent'}}>
              <Text style={styles.errMess}>{this.state.errMessage}</Text>
                </View>
               <KeyboardAvoidingView style={styles.formContainer}>
                <Input containerStyle={styles.formInput}
                placeholder='Username/Email'
                inputStyle={{color:'white'}}
                onChangeText={(email)=>{this.setState({email:email})}}
                value={this.state.email}
 		errorStyle={{ color: 'red' }}
                leftIcon={
                    <Icon name="user"
                    type="font-awesome"
                    color='white'
                    />
                }
                />
                <Input containerStyle={styles.formInput}
                placeholder="password"
                errorStyle={{ color: 'red' }}
                 inputStyle={{color:'white'}}                
                onChangeText={(password)=>{this.setState({password:password})}}
                value={this.state.password}
                secureTextEntry={true}
                leftIcon={
                    <Icon name="key"
                    type="font-awesome"
                    color='white'/>
                }
                />
               </KeyboardAvoidingView>
                <View style={styles.formButton}>
                <Button
                        onPress={this.handleLogin}
                        title="Login"
                        icon={<Icon type="font-awesome" name="sign-in" size={24} color="white"/>}
                        buttonStyle={{backgroundColor:"green"}}
                        />
                </View>
                <View style={styles.formButton}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
            <Text style={{color:'white'}}> Didn't have a Account? Register </Text>
            </TouchableOpacity>   
                
                </View>

            </View>
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    errMess:{
        paddingTop:10,
        color:'red',
        justifyContent:'center'
    },
    form:{
        marginTop:10,
        justifyContent:'center',
        flex:1,
        alignContent:'center',
        
    },
    formInput:{
        marginTop:10,
        paddingTop:10,
        borderBottomColor:'black',
        width:'98%',
        color:'white'
        
    },
image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
    formButton: {
        margin: 30
    },
    formContainer:{
        width:'100%',
        
        
    }
})
