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
                            this.setState({amt:text})
                    }}
                    keyboardType={"numer-pad"}

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
	marginLeft:45,
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
