
import Login from './components/LoginScreen';
import Loading from './components/LoadingScreen';
import AddAmount from './components/Screen/AddMoney';
import Addvehicle from './components/Screen/AddVehicle';
import List from './components/Screen/Transacation';
import FAQ from './components/Screen/FAQs';
import vehicle from './components/Screen/vehicleDetails';
import {Profile} from './components/DashboradComponent';
import Register from './components/RegisterScreen';
import Home from './components/HomeScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import *as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDRC6sP-vSXqV2mKsK1ujlDdGL4e1O7Mgs",
  authDomain: "sihtoll-243511.firebaseapp.com",
  databaseURL: "https://sihtoll-243511.firebaseio.com",
  projectId: "sihtoll-243511",
  storageBucket: "sihtoll-243511.appspot.com",
  messagingSenderId: "443634981804",
  appId: "1:443634981804:web:eca36162a32b19748cf809"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig );


const AppStack=createStackNavigator({
  Home:Home,
  AddVehicle:Addvehicle,
  AddAmount:AddAmount,
  FAQ:FAQ,
  yourVehicle:vehicle,
  Transaction:List,
  Profile:Profile
},
{
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "black"
    },
    headerTitleStyle: {
        color: "red"            
    },
    headerTintColor: "red" ,
   
  })
});
const AuthStack=createStackNavigator({
  Login:Login,
  SignUp:Register
});

export  default createAppContainer(
  createSwitchNavigator({
      AppLoading:Loading,
      Auth:AuthStack,
      App:AppStack,
  },{
    initialRouteName:"AppLoading",
    
  })
);

