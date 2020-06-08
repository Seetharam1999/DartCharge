import React,{useEffect, Component} from 'react';
import { View, Text ,StyleSheet,ScrollView,KeyboardAvoidingView, Button,Alert, ImageBackground}from 'react-native';
import {Input,Card} from 'react-native-elements';
import *as firebase from 'firebase';



export default class Addvehicle extends Component{

    constructor(props){
        super(props);
        this.state={
            VehicleChassis:'',
        VehicleEngine:'',
        VehicleMake:'',
        VehicleModel: '',
        VehicleRegistration:'',
        VehicleType:'',
        Name:'',
        Aadhar:'',
        Number:'',
        Email_address:'',
        err:'' 
        }
    };
     static navigationOptions = {
        title: "Add Vehicles",
      };
    
         
   
render(){
    const id=this.props.navigation.getParam("id",'');
    this.update=()=>{
        if(!this.state.VehicleChassis && !this.state.VehicleEngine&&!this.state.VehicleMake
            &&!this.state.VehicleModel&&!this.state.VehicleRegistration&&!this.state.VehicleType&&!this.state.Aadhar){
                this.setState({
                    err:'please fill all details'
                });
            }
            else{
    
                 setTimeout(()=>{
                    Alert.alert('Vehicle Details Registerd','this details is under verification proccess started..');
                    firebase.database().ref(`/Users/${id}/ownerdetails`).push(this.state);
                    props.navigation.navigate('Home');
                 },2000);     
    }
    }
    
    return(
        <ImageBackground source={require('../../assets/road.jpg')} style={styles.image}> 
               <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={{fontSize:20}}> Enter Vechile Details</Text>
                        </View>
                        <ScrollView>
                        <Card containerStyle={styles.formContainer}>
                            
                            <Input
                                placeholder="Name"
                                autoFocus={true}
                                onChangeText={(text)=>{ 
                                this.setState({Name:text})
                                }}
                                inputStyle={{color:'white'}}
                                value={this.state.Name}
                                containerStyle={styles.formInput}
                            />
                            <Input
                                placeholder="Aadhar Number"
                                onChangeText={(text)=>{
                                    this.setState({Aadhar:text})
                                                                    }}
                                value={this.state.Aadhar}
                                inputStyle={{color:'white'}}
                                keyboardType={"number-pad"}
                                containerStyle={styles.formInput}
                            />
                            <Input
                                placeholder="Email"
                                onChangeText={(text)=>{
                                    this.setState({Email_address:text})
                                                                    }}
                                value={this.state.Email_address}
                                keyboardType={'email-address'}
                                inputStyle={{color:'white'}}
                                containerStyle={styles.formInput}
                            />
                            <Input
                                placeholder="Phone Number"
                                onChangeText={(text)=>{
                                    this.setState({Number:text})
                                                                    }}
                                value={this.state.Number}
                                inputStyle={{color:'white'}}
                                keyboardType={"number-pad"}
                                containerStyle={styles.formInput}
                            />
                            <Input
                                placeholder="Vehicle Chassis"
                                onChangeText={(text)=>{
                                    this.setState({VehicleChassis:text})
                                                                    }}
                                value={this.state.VehicleChassis}
                                inputStyle={{color:'white'}}
                                containerStyle={styles.formInput}
                            />
                            <Input
                                placeholder="Vehicle Make"
                                onChangeText={(text)=>{
                                    this.setState({VehicleMake:text})
                                                                    }}
                                 value={this.state.VehicleMake}
                                 inputStyle={{color:'white'}}
                                containerStyle={styles.formInput}
                            />
                            <Input
                                placeholder="Vehicle Model"
                                onChangeText={(text)=>{
                                    this.setState({VehicleModel:text})
                                                                    }}
                                 value={this.state.VehicleModel}
                                 inputStyle={{color:'white'}}
                                containerStyle={styles.formInput}
                            />
                            <Input
                                placeholder="Vehicle Registration"
                                onChangeText={(text)=>{
                                    this.setState({VehicleRegistration:text})
                                                                    }}
                                value={this.state.VehicleRegistration}
                                containerStyle={styles.formInput}inputStyle={{color:'white'}}
                            />
                            <Input
                                placeholder="Vehicle Type"
                                onChangeText={(text)=>{
                                    this.setState({VehicleType:text})
                                                                    }}
                                value={this.state.VehicleType}
                                inputStyle={{color:'white'}}
                                containerStyle={styles.formInput}
                            />
                            
                            <View>
                                <Button
                                containerStyle={styles.btn}
                                title="Update"
                                onPress={this.update}      
                                />
                            </View>
                        </Card>
                        </ScrollView>
                    </View>
           </ImageBackground>

    )

}

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

