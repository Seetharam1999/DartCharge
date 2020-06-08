import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground, Alert}from 'react-native';
import { Icon,Input,Button} from 'react-native-elements';

export default class AddAmount extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            amt:null
        }
    }
    static navigationOptions={
        title:'Add Money'
    }
   
    render(){
  const id=this.props.navigation.navigate("id",'');
  const add=()=>{
        Alert.alert("your Amount Added",this.state.amt);
        this.props.navigation.navigate('Home');
}
  return(
      <ImageBackground source={require('../../assets/road.jpg')} style={styles.image}>
            <View style={styles.container}>
                <View styles={styles.form}>
                    <Text style={{fontSize:30,textAlign:'center',color:'white'}}>Enter Amount</Text>
                </View>
                <View style={styles.form}>
                    <Icon
                    type="font-awesome"
                    
                    raised
                    iconStyle={{color:'red'}}
                    name="money"
                    />
                </View>
                <View style={styles.form}> 
                    <Input
                    containerStyle={styles.input}
                    
                    onChangeText={(text)=>{
                            this.setState({amt:text})
                    }}
                    keyboardType={"numer-pad"}

                    />
                </View>
                <View style={styles.form}>
                    <Button
                    title="Add Money"
                   containerStyle={styles.btn}
                    onPress={add}
                    />
                </View>
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
    form:{
        flex:1,
        marginTop:10,
        marginBottom:20,
       alignItems:'center',
        justifyContent:'center',
        width:'80%'
    },
    input:{
        width:'50%',

         borderRadius:10,
    backgroundColor:'white'
   },
   btn:{
       width:'50%',
       color:'red',
       alignItems:'center',
       marginStart:10


   }

})