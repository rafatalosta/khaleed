import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Rents extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Rents</Text>
            </View>
        )
    }
}

export default Rents;


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff'
    }
    
  });