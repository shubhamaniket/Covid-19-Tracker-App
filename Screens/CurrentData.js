import React from 'react';
import {View,Image,TouchableWithoutFeedback,StyleSheet,Text,FlatList,ActivityIndicator,Dimensions} from 'react-native';
const screenwidth = Dimensions.get('window').width;
export default class CurrentData extends React.Component{
    state = {
        loading : true,
        data : []
    }
    componentDidMount(){
        this.fetchapi();
    }
    fetchapi = () => {
        fetch('https://covid2019-api.herokuapp.com/v2/current')
        .then((response) => response.json())
        .then((responsejson) => {this.setState({
            loading : false,
            data : responsejson.data
        })
        console.log(responsejson.data)})
        .catch((error)=>console.log(error))
    }
    renderitem = (item) => {
        return(
            <View style={styles.countrystyle}>
                <Text style={{fontSize : 20}}>{item.location}</Text>
            </View>

        );
    }
    render(){
        if(this.state.loading)
        {
            return(
                <View style={{flex:1,backgroundColor:'#fff'}}>
                <TouchableWithoutFeedback onPress={()=>{this.props.navigation.toggleDrawer();}}>
                    <Image source={require('../index.png')} style={{width:30,height:30,margin:10}}/>
                </TouchableWithoutFeedback>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator color="blue" size="large"/>
                </View>
            </View>
            );
        }
        else
        {
            return(
                <View style={{flex:1,backgroundColor:'#fff'}}>
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.toggleDrawer();}}>
                        <Image source={require('../index.png')} style={{width:30,height:30,margin:10}}/>
                    </TouchableWithoutFeedback>
                    <FlatList
                    data = {this.state.data}
                    renderItem={({item}) => this.renderitem(item) }
                    keyExtractor={(item, index) => item.location}/>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    countrystyle : {
        flex:1,
        alignItems : 'center',
        justifyContent : 'center',
        width : screenwidth,
        height : 100,
        borderWidth : 1,
    }
})