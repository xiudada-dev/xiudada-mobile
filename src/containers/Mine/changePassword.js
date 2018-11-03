import React,{ Component } from 'react'
import moment from "moment"
import 'moment/locale/zh-cn'
import { Button, Tabs, InputItem, List, Modal, WingBlank, WhiteSpace, Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'

class changePassword extends Component{
    render(){
        return(
            <div>
                <List>
                    <InputItem placeholder="请输入原始密码">
                        原密码
                    </InputItem>
                    <InputItem placeholder="请输入新的密码">
                        新密码
                    </InputItem>
                    <InputItem placeholder="请输入新的密码">
                        确认密码
                    </InputItem>
                </List>
                <div className="surebtnbg">
                    <Button style={{backgroundColor:'#44caa6'}} type="primary" >确定</Button><WhiteSpace />
                </div>
            </div>
        )
    }
}