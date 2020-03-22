import React from 'react';
import {Image,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './stackscreens/Profile';
import WebView from './Screens/WebView';
import Current from './stackscreens/current';
import graphscreen from './stackscreens/graphscreen';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function TotalData({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen options={{title: "Profile"}} name="Profile" component={Profile} options={{title: 'Total Data',headerLeft: () => (
            <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}}>
              <Image source={require('./index.png')} style={{width:30,height:30,margin:10}}/>
            </TouchableOpacity>
          )}}/>
    </Stack.Navigator>
  );
}
function Currentd({navigation}){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Current" component={Current} options={{title: 'Current Data',headerLeft: () => (
            <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}}>
              <Image source={require('./index.png')} style={{width:30,height:30,margin:10}}/>
            </TouchableOpacity>
          )}}/>
      <Stack.Screen name="graphscreen" component={graphscreen} options={{title: 'Graph',headerLeft: () => (
            <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}}>
              <Image source={require('./index.png')} style={{width:30,height:30,margin:10}}/>
            </TouchableOpacity>
          )}}/>
    </Stack.Navigator>
  );
}
export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Current" component={Currentd}/>
          <Drawer.Screen name="Total Data" component={TotalData}/>
          <Drawer.Screen name="Map View of HERE TECH." component={WebView}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
    }
}