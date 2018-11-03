import React,{ Component } from 'react'
import moment from "moment"
import 'moment/locale/zh-cn'
import { Button, Tabs, InputItem, List, Checkbox, Icon, DatePicker, Modal, WingBlank, WhiteSpace, Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'

// import './location.less'
moment.locale('zh-cn')

const prompt = Modal.prompt;
const Item = List.Item;
const state = {
    name: "username",
    phonenum: "phonenum",
}

class changeInfo extends Component {
    render() {
        return(
            <div className="changeinfo">
                <List>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                          arrow="horizontal"
                          onClick={() => prompt('修改姓名', '为了便民服务请输入您的真实姓名',
                              [
                                  {
                                      text: '取消',
                                      onPress: value => new Promise((resolve) => {
                                          Toast.info('onPress promise resolve', 1);
                                          setTimeout(() => {
                                              resolve();
                                              console.log(`value:${value}`);
                                          }, 1000);
                                      }),
                                  },
                                  {
                                      text: '确定',
                                      onPress: value => new Promise((resolve, reject) => {
                                          Toast.info('onPress promise reject', 1);
                                          setTimeout(() => {
                                              reject();
                                              console.log(`value:${value}`);
                                              this.state.name=value;
                                          }, 1000);
                                      }),
                                  },
                              ], 'default', null, [this.state.name])}
                          extra={state.name}
                    >
                        姓名
                    </Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                          extra={state.phone}
                          arrow="empty"
                          onClick={() => {}}>
                        手机号
                    </Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                          arrow="horizontal"
                          onClick={() => {}}>
                        修改密码
                    </Item>
                </List>
            </div>
        )
    }
}

export default changeInfo