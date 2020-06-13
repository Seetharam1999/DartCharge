import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground}from 'react-native';
import { Icon,Card,Button} from 'react-native-elements';
import ListView from 'deprecated-react-native-listview';
import *as firebase from 'firebase';
//import { FlatList } from 'react-native-gesture-handler';
export default class vehicle extends Component{
    constructor(props)
    {
        super(props);
        let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
       this.state={
           itemDataSource:ds,
                 id:''
       }
    }
componentWillMount(){
    this.getItem();
}
    componentDidMount(){
         
         const { currentUser } = firebase.auth()
          this.setState({id:currentUser.uid})
          console.log(this.state.id);
          this.getItem()
    
        
        
        }
        getItem(){
            let item=[];
            firebase.database().ref(`/Users/`).on('value',snap=>{
                snap.forEach(data=>{
                    data.forEach(dataa=>{
                        dataa.forEach(num=>{
                         num.forEach(da=>{
                         if(da.key==='VehicleRegistration')
                         {
                            item.push({title:da.val()})    
                         }
                         })
                        })
                    })
                })
              
              })
            this.setState({
                itemDataSource:this.state.itemDataSource.cloneWithRows(item)
            })
        }
    static navigationOptions={
        title:'Your Vehicle'
    }
    render(){
       
        return(
            <ImageBackground source={require('../../assets/road.jpg')} style={styles.image}>
                <View style={styles.container}>
               <ListView
               dataSource={this.state.itemDataSource}
               renderRow={(item)=>(

                <Card containerStyle={styles.data}>
                <View style={{flex:1,flexDirection:'row'}}>
                <Icon
                type="font-awesome"
                name='user'
                raised
                
                color='red'
                reverse/>
                    <Text style={{fontSize:15,textAlign:'center'}}>
                        {item.title}
                    </Text>
              </View>
                </Card>
               )}/>
             </View>
                </ImageBackground>
        )}
}
const styles=StyleSheet.create({
    image:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        
    },
    container:{
        flex:1,
        
    },
    data:{
        flex:1,
        borderRadius:5,
        width:'90%',
        
      }
})