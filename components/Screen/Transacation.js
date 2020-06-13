import React, { Component } from 'react';
import {View,Text,ImageBackground,StyleSheet,FlatList} from 'react-native';
import {Card, Tile, ListItem} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class List extends Component{
constructor(props){
    super(props);
    this.state={
        err:null,
        data:[
            {   loc:'chennai',
                amt:'60',
                time:'2020-01-07',
                paid:'Paid'
            },
            {
                loc:'chennai',
                amt:'60',
                time:'2020-01-06',
                paid:'Paid'
            },
            {
                loc:'chennai',
                amt:'60',
                time:'2020-01-08',
                paid:'Paid'
            },
            {
                loc:'chennai',
                amt:'60',
                time:'2020-01-09',
                paid:'Paid'
            }
        ]


    }
}
static navigationOptions={
    title:'Payment History'
}

    render()
    {
      const id=this.props.navigation.navigate('id','');
   const renderTransacation=({item,index})=>{
                return(<ScrollView>
                           <Card containerStyle={styles.data}>
                            <View style={{flexDirection:'row'}}>
                               <View style={styles.data}>
                                 <Text>{item.loc}</Text>
                               

                               </View>
                               <View  style={styles.data}>
                                
                                 <Text style={{marginRight:50}}>{item.amt}</Text>
                                

                               </View>
                               <View  style={styles.data}>
                               
                                 <Text style={{marginRight:50}}>{item.time}</Text>

                               </View>
                               <View style={{borderWidth:1,backgroundColor:'grey',borderRadius:2}}>
                               
                               <Text>{item.paid}</Text>

                             </View>
                                 </View>
                                 </Card>
                    </ScrollView>
                    )
   }
        return(
<ImageBackground source={require('../../assets/road.jpg')} style={styles.image}>
            <View style={styles.container}>
                
                <FlatList
                data={this.state.data}
                renderItem={renderTransacation}
                
                keyExtractor={(item)=>{item.time.toString()}}/>
            
            </View>
            </ImageBackground>
        )
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
        
      }
})