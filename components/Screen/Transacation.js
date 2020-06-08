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
                
            },
            {
                loc:'chennai',
                amt:'60',
                time:'2020-01-06',
                
            },
            {
                loc:'chennai',
                amt:'60',
                time:'2020-01-08',
                
            },
            {
                loc:'chennai',
                amt:'60',
                time:'2020-01-09',
                
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
                            <Card
                            containerStyle={styles.crad}>
                               <View style={styles.data}>
                                 <Text>{item.loc}</Text>
                                 <Text>{item.amt}</Text>
                             <Text>{item.time}</Text>

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
    justifyContent:'space-between'
},
    image:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center'
    },
    data:{
        flex:2,
        
    },
    crad:{
      
        width:'90%',
        justifyContent:'space-between',
        alignContent:'space-between',

    }
})