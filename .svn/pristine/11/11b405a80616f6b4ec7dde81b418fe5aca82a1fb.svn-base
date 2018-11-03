import React,{ Component } from 'react'
import { Button, Tabs, List, Flex, SegmentedControl, WingBlank, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'

class OrderDetail extends Component{
    onChange = (e) => {
        console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    }
    onValueChange = (value) => {
        console.log(value);
    }
    render(){
        return(
            <div className="bgview">
                <div className="segmentedview">
                    <SegmentedControl
                        values={['工单详情', '工单留言']}
                        tintColor={'#47caa6'}
                        style={{ height: '40px', width: document.querySelector('body').offsetWidth/2 }}
                        className="segmentedstyle"
                        selectedIndex={0}
                    />
                </div>
                <div className="whitebg">
                    <Flex>
                        <div className="blockview">
                            <img/>
                            <p style={{color:"#777777"}}>提交预约</p>
                            <p style={{color:"#777777"}}>time<br />time</p>
                        </div>
                        <div className="blockview">
                            <img/>
                            <p style={{color:"#777777"}}>工单受理</p>
                            <p style={{color:"#777777"}}>time<br />time</p>
                        </div>
                        <div className="blockview">
                            <img/>
                            <p style={{color:"#777777"}}>正在服务</p>
                            <p style={{color:"#777777"}}>time<br />time</p>
                        </div>
                        <div className="blockview">
                            <img/>
                            <p style={{color:"#777777"}}>服务完成</p>
                            <p style={{color:"#777777"}}>time<br />time</p>
                        </div>
                    </Flex>
                </div>
                <div className="orderinfo">
                    <p className="numtype">工单号：</p>
                    <Flex justify="end">
                        <p className="titlestyle">title</p>
                        <p className="statusstyle">已预约</p>
                    </Flex>
                    <p className="itemstyle">item</p>
                </div>
                <WhiteSpace size="md"/>
                <div className="whitebg">
                    <div>
                        <p className="texttopstyle">预计时间:</p>
                        <p className="numtype">地址:</p>
                        <p className="itemstyle">工单模版:</p>
                    </div>
                </div>
                <WhiteSpace size="md"/>
                <div className="whitebg">
                    <p className="detailsstyle">详细描述:</p>
                </div>
                <WhiteSpace size="lg"/>
                <div className="btnview">
                    <Button type="primary" className="message">
                        我要留言
                    </Button>
                </div>
                <WhiteSpace size="lg"/>
                <div className="btnview">
                    <Button type="primary" className="cancel">
                        取消工单
                    </Button>
                </div>
                <WhiteSpace size="md"/>
            </div>
        )
    }
}

export default OrderDetail