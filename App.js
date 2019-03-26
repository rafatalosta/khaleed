

import React, {Component} from 'react';
import { StyleSheet,
         ScrollView,
         Image,
         View
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'


import Explore from './app/screens/Explore'
import Saved from './app/screens/Saved'
import Rents from './app/screens/Rents'
import Inbox from './app/screens/Inbox'





 class App extends Component {
  render() {
    return (
      <View>
    
      <ScrollView style={styles.container}>
        
        


      </ScrollView>
      </View>
   
    );
  }
}

export default createBottomTabNavigator({
  
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor}) => (
          <Icon name={'ios-search'}
           color= {tintColor} size={24}  />
      )
    }

  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor}) => (
          <Icon name={'ios-heart'}
           color= {tintColor} size={24} />
      )
    }
  },
  Rents:{
    screen:Rents,
    navigationOptions:{
      tabBarLabel:'RENTS',
      tabBarIcon:({tintColor}) => (
          <Image source={require ('./app/images/rent.png')}
            style={{height: 24, width: 24, tintColor: tintColor}} />
      )
    }
  },
  Inbox:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor}) => (
          <Icon name={'ios-chatboxes'}
           color= {tintColor} size={24} />
      )
    }
  },
  Profile:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel:'PROFILE',
      tabBarIcon:({tintColor}) => (
          <Icon name={'ios-person'}
           color= {tintColor} size={24} />
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
    style:{
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset:{width:5,height:3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  }
  
});
