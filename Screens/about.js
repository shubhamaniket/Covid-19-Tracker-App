import React from 'react';
import {View,StyleSheet,Text,TouchableWithoutFeedback,Image} from 'react-native';

export default class About extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <TouchableWithoutFeedback onPress={()=>{this.props.navigation.toggleDrawer();}}>
                    <Image source={require('../index.png')} style={{width:30,height:30,margin:10}}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}