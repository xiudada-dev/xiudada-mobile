import React,{ Component } from 'react'
import { Button, Tabs, InputItem, List, Checkbox, Icon } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'
import './changeInfo'

const Item = List.Item;

class Mine extends Component {
    render() {
        return(
            <div className="mine">
                <div className="head">
                    <div className="outbtn">
                        <a><img src="/imgs/icon/out.png" alt="1"/></a>
                    </div>
                    <div className="usericon">
                        <img className="icon" src="/imgs/icon/defualthead.png" alt="1"/>
                    </div>
                    <p>用户名称</p>
                </div>
                <List>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                          arrow="horizontal"
                          onClick={() => {}}>
                        我的账号
                    </Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                          arrow="horizontal"
                          onClick={() => {}}>
                        我的地址
                    </Item>
                </List>
            </div>
        )
    }
}

export default Mine