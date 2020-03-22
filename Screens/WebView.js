import React from 'react';
import {View,StyleSheet,Text,TouchableWithoutFeedback,Image} from 'react-native';
import {WebView} from 'react-native-webview';
export default class Profile extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.toggleDrawer();}}>
                        <Image source={require('../index.png')} style={{width:30,height:30,margin:10}}/>
                    </TouchableWithoutFeedback>
                    <WebView source={{ uri: 'https://app.developer.here.com/coronavirus/' }} />
            </View>
            
        );
    }
}