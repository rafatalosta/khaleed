import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Machine from '../components/Explore/Machine'
import Tag from '../components/Explore/Tag'
import { Header,Divider  } from 'react-native-elements';

const { height, width } = Dimensions.get('window')
class Explore extends Component {

    componentWillMount() {
        this.scrollY = new Animated.Value(0)
        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })
        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
    }
    render() {
        return (
         
            <SafeAreaView style={{ flex: 1 }}>

                <Header style={{height: 10}}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={{ flex: 1 }}>
                    <Animated.View style={{
                        height: this.animatedHeaderHeight, backgroundColor: 'white',
                        borderBottomWidth: 1, borderBottomColor: '#dddddd'
                    }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>

                            <Icon name={'ios-search'} size={30}
                                style={{ marginRight: 5 }} />
                            <TextInput underlineColorAndroid="transparent"
                                placeholder="Search"
                                placeholderTextColor="gray"
                                style={{
                                    flex: 1, fontWeight: '500',
                                    backgroundColor: 'white',
                                    height: 40, paddingTop: 10
                                }} />
                        </View>
                        <Animated.View
                            style={{
                                flexDirection: 'row', marginHorizontal: 20,
                                position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity
                            }}>
                            <Tag name="Guests" />
                            <Tag name="Dates" />
                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}>

                        <View style={{
                            flex: 1, backgroundColor: 'white',
                            paddingTop: 20
                        }}>
                            <Text style={{
                                fontSize: 24, fontWeight: '700',
                                paddingHorizontal: 20
                            }}>What can we help you find ?
                                   </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('../images/img3.png')}
                                        name="Metre" />

                                    <Category imageUri={require('../images/img2.jpg')}
                                        name="Drile" />
                                    <Category imageUri={require('../images/img4.jpg')}
                                        name="Metre" />
                                    <Category imageUri={require('../images/imga.jpg')}
                                        name="Metre" />

                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Taajerkom plus
                                  </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of machine
                    </Text>
                                <View style={{
                                    width: width - 40, height: 200,
                                    marginTop: 20
                                }}>
                                    <Image
                                        style={{
                                            flex: 1, height: null, width: null, resizeMode: 'cover',
                                            borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'
                                        }}
                                        source={require('../images/img3.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40, }}>
                            <Text style={{
                                fontSize: 24, fontWeight: '700',
                                paddingHorizontal: 20
                            }}>
                                Machine Around you
                </Text>
                            <View style={{
                                paddingHorizontal: 20, marginTop: 20, flexDirection: 'row',
                                flexWrap: 'wrap', justifyContent: 'space-between'
                            }}>
                                <Machine width={width}
                                    name="Plow machine"
                                    type="small 1000wat"
                                    price={10}
                                    rating={4} />
                                <Machine width={width}
                                    name="Plow machine"
                                    type="small 1000wat"
                                    price={10}
                                    rating={4} />
                                <Machine width={width}
                                    name="Plow machine"
                                    type="small 1000wat"
                                    price={10}
                                    rating={4} />



                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        
        )
    }
}

export default Explore;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        height: 130,
        width: 130
    }

});