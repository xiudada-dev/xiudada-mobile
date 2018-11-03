import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'

import { TabNavigator } from "react-navigation"

class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../Images/hot_hover.png') : require('../Images/hot.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>首页</Text>
            </View>
        )
    }
}
class Repairs
    extends React.Component {
    static navigationOptions = {
        tabBarLabel: '订单',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../Images/coterie_hover.png') : require('../Images/coterie.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>订单列表</Text>
            </View>
        )
    }
}
class Mypage extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../Images/my_hover.png') : require('../Images/my.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>我的</Text>
            </View>
        )
    }
}

const BottomTabBar = TabNavigator(
    {
        Home: {
            screen: Home,
        },
        Repairs: {
            screen: Repairs,
        },
        Mypage: {
            screen: Mypage,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#4BC1D2',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
        <div className="content">
            <div className="content-item current"><img src="imgs/icon"/></div>
            <div className="content-item current"><img src="imgs/icon"/></div>
            <div className="content-item current"><img src="imgs/icon"/></div>
            <div className="content-item current"><img src="imgs/icon"/></div>
        </div>
        name = {tab}
        size = {30}
        color = {this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
        ref = {(icon) => { this.icons[i] = icon; }}
    })
    iconColor(progress) {
        const red = 59 + (204 - 59) * progress;
        const green = 89 + (204 - 89) * progress;
        const blue = 152 + (204 - 152) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }
    constructor(props) {
        super(props);
        this.icons = [];
    }

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue.bind(this));
    }

    setAnimationValue({ value, }) {
        this.icons.forEach((icon, i) => {
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                },
            });
        });
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})

module.exports = BottomTabBar