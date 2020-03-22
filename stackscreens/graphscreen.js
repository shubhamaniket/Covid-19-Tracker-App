import React from 'react';
import {View,Text,StyleSheet,ActivityIndicator,ScrollView} from 'react-native';
import {LineChart,BarChart} from 'react-native-chart-kit';
const chartConfig = {
  backgroundGradientFrom: "red",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => 'black',
  strokeWidth: 5, // optional, default 3
  barPercentage: 2
};
export default class graphscreen extends React.Component{
    state = {
        data : [],
        date : [],
        loading : true
    }
    componentDidMount(){
        this.handleapi();
    }
    handleapi = () => {
        fetch(`https://covid2019-api.herokuapp.com/v2/country/${this.props.route.params.country}`)
        .then((response)=>response.json())
        .then((responsejson)=>{
            this.setState({
                data : responsejson.data,
                date : responsejson.dt,
                loading : false
            })
        })
    }
    render(){
        const conf = this.state.data.confirmed;
        const dead = this.state.data.deaths;
        const recover = this.state.data.recovered;
        console.log(conf);
        if(this.state.loading)
        {
          return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <ActivityIndicator size="large" color="blue"/>
              <Text style={{color:'red',fontSize:15,fontWeight:'bold',marginTop:10}}>Loading Graphs</Text>
            </View>
          );
        }
        else
        {
          return(
            <ScrollView>
            <View style={styles.container}>
              <View>
              <Text style={{fontSize:20,textAlign:'center'}}>Bezier Line Chart</Text>
              <Text style={{textAlign:'center'}}>Data as on :  {this.state.date}</Text>
                <LineChart  
                  data={{
                    labels: ["confirmed","deaths","recovered"],
                    datasets: [
                      {
                        data: [
                          conf,dead,recover
                        ]
                      }
                    ]
                  }}
                  width={340} // from react-native
                  height={420}
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => 'red',
                    labelColor: (opacity = 1) => 'black',
                    style: {
                      borderRadius: 16,
                      fontWeight : 'bold'
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "black"
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 15,
                    borderRadius: 16,
                  }}
                />
            
          </View>
          <Text style={{fontSize:20,textAlign:'center'}}>Bar Chart</Text>
          <Text style={{textAlign:'center'}}>Data as on :  {this.state.date}</Text>
          <View>
          <BarChart
            style={{
              marginVertical: 15,
              borderRadius: 16,
              marginHorizontal:20,
              fontWeight : 'bold'
            }}
            data={{
              labels: ["Confirmed","Deaths","Recovered"],
              datasets: [
                {
                  data: [conf,dead,recover]
                }
              ]
            }}
            width={340}
            height={420}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
          />
          </View>
          <Text style={{fontSize:20,textAlign:'center'}}>Line Chart</Text>
          <Text style={{textAlign:'center'}}>Data as on :  {this.state.date}</Text>
          <LineChart
              data={{
                labels: ["Confirmed","Deaths","Recovered"],
                datasets: [
                  {
                    data: [conf,dead,recover]
                // optional
                  }
                ],
              }}
              width={340}
              height={420}
              chartConfig={chartConfig}
            />
          </View>
          </ScrollView>
        );
        }
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#fff'
    }
})