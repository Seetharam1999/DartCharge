
import React, { Component } from 'react';
import {View,StyleSheet, Alert,TouchableOpacity,Text,ScrollView} from 'react-native';
import {Input,Button,Icon} from 'react-native-elements';
import *as firebase from 'firebase';
export default class Register extends Component{
    state={
        username:'',
        password:'',
        email:'',
        number:'',
        uid:'',
        errMessage:null
    }
handleRegister=()=> {

if(!this.state.email&&!this.state.password&&!this.state.number && !this.state.username){
    Alert.alert("Please Enter Details email/password")
    this.setState({errMessage:'please enter email/password'})
}
else{
 firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
.then((res)=>{
    setTimeout(()=>{
        Alert.alert("user is created");
     res.user.updateProfile(
            {
                displayName:this.state.username,
		         });
    },2000);
       
                 this.update(res.user.uid)
            this.setState({
        username:'',
        password:'',
        email:'',
        number:''
})

})
.catch(error=>{
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      this.setState({errMessage:error.code});
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      this.setState({errMessage:error.code});
    }

})

}
this.update=(id)=>{
    firebase.database()
.ref(`/Users/${id}`)
.set({
  email: this.state.email,
  name:this.state.username,
  ph_number:this.state.number,
  wallet:{
      amount:'0'
  }
})
.then(() => console.log('Data set.'));
}
    }

    render() {
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={{paddingTop:10}}>
                    <Text style={{fontSize:20}}>Register User</Text>
                    </View>


                  <View style={{paddingTop:10,backgroundColor:'transparent'}}>
             <Text style={styles.errMess}>{this.state.errMessage}</Text> 
                </View>
                <View style={{marginTop:20,width:'100%'}}>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    />
                
               
                <Input
                    placeholder="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    containerStyle={styles.formInput}
                    />
                      <Input
                    placeholder="Number"

                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(number) => this.setState({number})}
                    value={this.state.number}
                    keyboardType='number-pad'
                    containerStyle={styles.formInput}
                    />
               <Input
                    placeholder="Password"
                
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry={true}
                    containerStyle={styles.formInput}
                    />
                <View style={styles.formButton}>
                    <Button
                        onPress={this.handleRegister}
                        title="Register"
                        icon={
                            <Icon
                                name='user-plus'
                                type='font-awesome'            
                                size={24}
                                color= 'white'
                            />
                        }
                        buttonStyle={{
                            backgroundColor: "#512DA8",
                            padding:10,margin:10
                        }}
                        />
                        
                        <TouchableOpacity style={{margin:10,justifyContent:'center'}}onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{textAlign:'center',marginTop:20}}>Already have a Account? Login </Text>
            </TouchableOpacity>  
                  </View>
                </View>
            </View>
           </ScrollView>
        );
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
        
    },errMess:{
        paddingTop:10,
        color:'red',
        fontSize:20,
        justifyContent:'center'
    },
    formInput:{
        marginTop:10,
        paddingTop:10,
        backgroundColor:'transparent',
        width:'98%',
        
    }
})
