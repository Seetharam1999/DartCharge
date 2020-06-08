
import Login from './components/LoginScreen';
import Loading from './components/LoadingScreen';
import AddAmount from './components/Screen/AddMoney';
import Addvehicle from './components/Screen/AddVehicle';
import List from './components/Screen/Transacation';
import {Profile,FAQ} from './components/DashboradComponent';
import Register from './components/RegisterScreen';
import Home from './components/HomeScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import *as firebase from 'firebase';
//import { AddAmount } from './components/DashboradComponent';

var firebaseConfig = {
  apiKey: "AIzaSyCXPzNGmtyp9k9-9L4m6z3GWJynLwMBJCM",
  authDomain: "testlogin-123.firebaseapp.com",
  databaseURL: "https://testlogin-123.firebaseio.com",
  projectId: "testlogin-123",
  storageBucket: "testlogin-123.appspot.com",
  messagingSenderId: "188959538817",
  appId: "1:188959538817:web:a68cc064864ddd2f289780",
  measurementId: "G-SFMNKPD2D1"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);


const AppStack=createStackNavigator({
  Home:Home,
  AddVehicle:Addvehicle,
  AddAmount:AddAmount,
  FAQ:FAQ,
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

