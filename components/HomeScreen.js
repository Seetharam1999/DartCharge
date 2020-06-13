import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,FlatList,ScrollView, Alert} from 'react-native'
import *as firebase from 'firebase';
import { Icon, Card} from 'react-native-elements';


export default class Home extends Component{
     state = { currentUser: null ,
    amt:0}
     
    component=
        [
        {
            id:0,
            src:'AddVehicle',
            icon:'plus',
            name:'Add Vehcile'
        },{
            id:1,
            src:'yourVehicle',
            icon:'search',
            name:'Your Vehicle'
        },{
            id:2,
            src:'AddAmount',
            icon:'money',
            name:'Add Money'
        },{
            id:3,
            icon:'check-square-o',
            src:'Transaction',
            name:'Payment\nHistory'
        },
        {
            id:4,
            src:'FAQ',
            icon:'user-o',
            name:'FAQs'
        },
        {
            id:5,
            src:'log',
            icon:'sign-out',
            name:'Logout'
        }
    ]


	 componentDidMount() {
    const { currentUser } = firebase.auth()
        this.setState({ currentUser:currentUser})
        firebase.database().ref(`/Users/${currentUser&&currentUser.uid}/wallet/amount`).on('value',snap=>{
           this.setState({amt:snap.val()})
        }) 
    }
    
signOut=()=>{
    firebase.auth().signOut();

}

async (){
    
}
renderGrid=({item,index})=>{
    return(
      <ScrollView>
             <TouchableOpacity style={{marginEnd:10,marginTop:15}} onPress={()=>{
                        item.src==='log'?
                         this.signOut():this.props.navigation.navigate(item.src,{id:this.state.currentUser.uid})
                   }}>
             
                 <View style={{marginTop:10}}>
                  <Icon
                   name={item.icon}
                   type="font-awesome"
                   reverse
                   
                   color='red'
                     />
            <Text style={{textAlign:'center'}}>{item.name}</Text>
   </View>

   </TouchableOpacity>
   </ScrollView>
    )
}
image=require('../assets/road.jpg')
    render(){

 const { currentUser } = this.state
        return(
        <ImageBackground source={this.image} style={styles.image}>

        <View style={styles.container}>
           <Text style={{alignItems:'center',color:'white',fontSize:25,marginTop:10}}> Account Balance</Text>
               <View style={styles.amt}>
               <Icon type="font-awesome" name='money'/>
               
        <Text style={{fontSize:30,marginRight:150}}>{this.state.amt}</Text>
           </View>
         
<View style={styles.component}>
    <Card containerStyle={styles.btn}>
             <FlatList
               data={this.component}
               renderItem={this.renderGrid}
               
               numColumns={3}
               keyExtractor={(item)=>item.id.toString()}
               />
        </Card>
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
        alignItems:'center',
        
    },
    image: {
      flex:1,
      resizeMode: "cover",
      justifyContent: "center"
    },amt:{
        flex:0.3,
       alignItems:'center',
       flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between',
        backgroundColor:'white',
        width:'95%',
        marginTop:10,
        paddingStart:20,
        paddingEnd:21,
        marginBottom:25,
        borderRadius:5
    },btn:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        
        width: '95%',
        borderRadius:6,
        marginHorizontal:20,
        
        shadowColor: 'grey',
        shadowOpacity: 0.9,
        shadowOffset:{width:3,height:2}
          },
        component:{
            flex:1.2,
           
           marginBottom:110
      }
    })
