import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground, Alert}from 'react-native';
import { Icon,Input,Button} from 'react-native-elements';
import *as firebase from 'firebase';
import RazorpayCheckout from 'react-native-razorpay';
export default class AddAmount extends Component{
    
    
         
    constructor(props)
    {
        super(props);
        this.state={
            amount:null,
           
            id:''
        }

    }
    componentDidMount() {
        const { currentUser } = firebase.auth()
          this.setState({id:currentUser.uid})
        }
    static navigationOptions={
        title:'Add Money'
    }
   
    render(){
        const id=this.props.navigation.navigate("id",'');
     const add=()=>{
      if(!this.state.amount || this.state.amount==='0'){
          Alert.alert('please enter your Amount','',[{
              text:'Cancel',
              onPress:()=>this.setState({amount:null}),
              style:'cancel'
          },{
            text:'Ok',
            onPress:()=>this.setState({amount:''}),
            style:'ok'
          }],{
              cancelable:false
          })

          this.setState({amount:''})
      }
      else{
          let amt=0;
          setTimeout(()=>{
            firebase.database().ref(`/Users/${this.state.id}/wallet/amount`).on('value',snap=>{
                amt=amt+parseInt(snap.val());
             
             })
                
        firebase.database().ref(`/Users/${this.state.id}/wallet`).set({
            
            amount:amt+ parseInt(this.state.amount)
        }).then(()=>{
            Alert.alert('your Amount added',this.state.amount);
        })
        
        this.props.navigation.navigate('Home');
            
          },2000)
       /*
            var options = {
                description: 'Dart nd Charge',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_k4hd0MBmuEy4Ql',
                amount: parseInt(this.state.amount),
                name: 'foo',
                prefill: {
                  email: 'srseetharam@gmail.com',
                  contact: '8015064849',
                  name: 'seetharam'
                },
                theme: {color: '#F37254'}
              }
              RazorpayCheckout.open(options).then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
                firebase.database().ref(`/Users/${this.state.id}/wallet`).set({
                    amount:this.state.amount
                })
              }).catch((error) => {
                // handle failure
                alert(`Error: ${error} | ${error.description}`);
              });
            
            
           */
            
          
}
}
  return(
      <ImageBackground source={require('../../assets/road.jpg')} style={styles.image}>
            <View style={styles.container}>
              
                    <Text style={{fontSize:30,textAlign:'center',color:'white'}}>Enter Amount</Text>
              
                    <Icon
                    type="font-awesome"
                    containerStyle={{justifyContent:'center',flexWrap:'wrap',marginLeft:150}}
                    raised
                    iconStyle={{color:'red'}}
                    name="money"
                    />
              
                    <Input
                    containerStyle={styles.input}
                    
                    onChangeText={(text)=>{
                            this.setState({amount:text})
                    }}
                    keyboardType={"number-pad"}

                    />
              
                    <Button
                    title="Add Money"
                   containerStyle={styles.btn}
                    onPress={add}
                    />
             
            </View>
        </ImageBackground>
        )

}
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'transparent'
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    input:{
        width:'76%',
        marginLeft:40,
        borderColor:'red',
        borderRadius:10,
        backgroundColor:'white'
   },
   btn:{
       width:'50%',
       alignItems:'center',
       marginTop:20,
	
marginLeft:90
   }

})
