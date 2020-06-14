import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground,ScrollView,TouchableHighlight}from 'react-native';
import { Icon,Card} from 'react-native-elements';
import ListView from 'deprecated-react-native-listview';
import *as firebase from 'firebase';
//import { FlatList } from 'react-native-gesture-handler';
export default class vehicle extends Component{
    constructor(props)
    {
        super(props);
        const id=null;
        let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
       this.state={
           itemDataSource:ds,
           id:''
                
       }
    }
    componentDidMount(){
         
         const { currentUser } = firebase.auth()
        this.setState({id:currentUser.uid})
          let item=[];
            firebase.database().ref(`/Users/`).on('value',snap=>{
                snap.forEach(data=>{
                if(data.key===currentUser.uid){
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
                }
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
                <ScrollView style={styles.container}>
               <ListView
               dataSource={this.state.itemDataSource}
               enableEmptySections
               renderRow={(item)=>(
                <TouchableHighlight onPress={()=>{
                    this.props.navigation.navigate('Transaction');
                    
                }}
                style={{}}>
                <Card containerStyle={{borderRadius:5}}>
                <View style={styles.data}>
                <Icon
                type="font-awesome"
                name='automobile'
                raised
                style={{marginBottom:10}}
                color='red'
                reverse/>
                    <Text style={{fontSize:15,fontWeight:'bold',marginRight:25}}>
                        {item.title}
                    </Text>
              </View>
                </Card>
                </TouchableHighlight>
               )}/>
             </ScrollView>
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
        flex:0.5,
        alignItems:'center',
        flexDirection:'row',
         justifyContent:'space-between',
         alignContent:'space-between',
                
      }
})