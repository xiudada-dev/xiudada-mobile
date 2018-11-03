import React,{ Component } from 'react'
import { Button, Tabs, InputItem, List, Checkbox, Icon } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'
import $ from "jquery";

class PicPlay extends React.Component {
    constructor(props) {
        super(props);
        // Set up initial state
        this.state = {
            activeIndex:this.props.defaultActiveIndex?this.props.defaultActiveIndex:0,
            direction:this.props.direction?this.props.direction:'right'
        };
        // Functions must be bound manually with ES6 classes
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        this.autoPlay();
    }
    componentWillReceiveProps (){

    }
    componentWillUnmount(){
        clearInterval(this.timeOuter);
    }
    autoPlay(){
        if(this.props.autoPlay){
            if(this.props.direction==="right"){
                this.timeOuter=setInterval(this.playRight(this.state.activeIndex),this.props.interval);
            }else if(this.props.direction==="left"){
                this.timeOuter=setInterval(this.playLeft,this.props.interval);
            }
        }
    }
    playRight(indexIn){
        let index=indexIn?indexIn:this.state.activeIndex+1;
        console.log(index);
        if(index>this.props.number-1){
            index=0;
        }
        this.setState({
            activeIndex:index
        })
    }
    playLeft(indexIn){
        let index=indexIn?indexIn:this.state.activeIndex-1;
        console.log(index);
        if(index<0){
            index=this.props.number-1;
        }
        this.setState({
            activeIndex:index
        })
    }
    position(){
        switch (this.state.activeIndex){
            case 0:return "onePosition" ;
            case 1:return "twoPosition" ;
            case 2:return "therePosition" ;
            case 3:return "fourPosition";
        }
    }
    left(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playLeft(oldIndex+1);
        this.autoPlay();
    }
    right(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playRight(oldIndex-1);
        this.autoPlay();
    }
    render(){
        let{
            interval,
            autoPlay,
            activeIndex,
            defaultActiveIndex,
            direction,
            number,
            boxStyle
        }=this.props;
        return <div  className={boxStyle} >
            {/*<span className="leftIcon" onClick={this.left}>left</span>*/}
            {/*<span className="rightIcon" onClick={this.right}>right</span>*/}
            <ul className={this.position()}>
                {this.props.children}
            </ul>
        </div>
    }
}
PicPlay.propTypes = {
    interval:1000,
    autoPlay:true,
    activeIndex:4,
    defaultActiveIndex:4,
    direction:'right',
    number:4,
    boxStyle:"content",
};
PicPlay.defaultProps = {
    interval:3000,
    autoPlay:true,
    defaultActiveIndex:0,
    direction:'right'
};

export default PicPlay