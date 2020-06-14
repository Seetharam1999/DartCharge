import React, { Component } from 'react';
import {View,Text,ImageBackground,StyleSheet} from 'react-native';

import ListView from 'deprecated-react-native-listview';
import { ScrollView } from 'react-native-gesture-handler';
import *as firebase from 'firebase';
import Loading from '../LoadingScreen';
export default class List extends Component{
constructor(props){
    super(props);
    let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state={
        err:null,
        id:'',
        isLoading:false,
        itemDataSource:ds,
        data:null


    }
}
componentDidMount(){
    const { currentUser } = firebase.auth()
          this.setState({id:currentUser.uid})
        let Items=[]
        let location='';
        let amt='';
        let tstamp='';
          firebase.database().ref(`/Users/`).on('value',snap=>{
            snap.forEach(data=>{
                if(data.key===currentUser.uid){
                data.forEach(dataa=>{
                    dataa.forEach(num=>{
                     num.forEach(da=>{
                     da.forEach(rfid=>{
                        rfid.forEach(value=>{
                            Items.push(value.val())
                        //  value.forEach(trans=>{
                        //    console.log(value);
                        //   if(trans.key==='location')
                        //   {
                        //      location=trans.val()
                        //   }
                        //   if(trans.key==='singleamt')
                        //   {
                        //       amt=trans.val()
                        //   }
                        //   if(trans.key==='tstamp')
                        //     {
                        //         tstamp=trans.val()
                        //     }                          
                         
                        //  }
                    })
                     })
                     })
                    })
                })
            }
            })
          
          })
        
           
          this.setState({
            itemDataSource:this.state.itemDataSource.cloneWithRows(Items),
             isLoading:true
        })
    
          
}


static navigationOptions={
    title:'Payment History'
}

    render()
    {
    if(!this.state.isLoading){
        return( <ImageBackground source={require('../../assets/road.jpg')} style={styles.image}>

         <Loading/>
         </ImageBackground>)
    }
else{
        return(
<ImageBackground source={require('../../assets/road.jpg')} style={styles.image}>
            <View style={styles.container}>
            <ScrollView>
            <ListView
            dataSource={this.state.itemDataSource}
            renderRow={(item)=>(
                            
                            <View style={styles.trans}>
                               <View style={styles.data}>
                                 <Text style={{fontWeight:'bold',marginLeft:10}}>{item.location}</Text>
                                       </View>
                               <View  style={styles.data}>
                                
                                 <Text style={{marginRight:40,fontWeight:'bold'}}>{item.singleamt}</Text>
                                

                               </View>
                               <View  style={styles.data}>
                               
                                 <Text style={{marginRight:50,fontSize:10,fontWeight:'bold'}}>{item.tstamp}</Text>

                               </View>
                               <View style={styles.box}>
                               
                               <Text style={{textAlign:'center'}}>Paid</Text>

                             </View>
                                 </View>
                                
            )}
            />
           </ScrollView>
            </View>
            </ImageBackground>
        )
    }

}
}
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center'
},
    image:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center'
    },
    data:{
        flex:1,
        borderRadius:5,
        width:'95%',
        justifyContent:'center'
        
      },trans:{
          flexDirection:'row',
          backgroundColor:'white',
          borderRadius:5,
          marginTop:8,
          padding:2,
          margin:10,justifyContent:'center',
          alignContent:'center'
      },box:{
          
          backgroundColor:'#d9d9d9',
          borderRadius:5,
          shadowColor:'grey',
          shadowOpacity:0.2,
          shadowOffset:{width:2,height:1},
          justifyContent:'center',
          width:'15%',
            margin:5   
        }
})