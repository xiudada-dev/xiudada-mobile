import React,{ Component } from 'react'
import { Button, InputItem, Radio, Tabs, DatePicker, List, ListView, Stepper, TextareaItem, Flex} from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'
import Moment from 'moment'

const Item = List.Item;

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
}

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
const CustomChildren = ({ extra, onClick, children }) => (
    <div
        onClick={onClick}
        style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
    >
        {children}
        <span style={{ float: 'right', color: '#888' }}>{extra}</span>
    </div>
);

class Repairs extends Component {
    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
    render() {
        const { form } = this.props
        const { getFieldProps } = form

        return(
            <div className="mainview">
                <List>
                    <InputItem
                        {...getFieldProps('title')}
                        placeholder="请输入标题">
                        <p className="red">*</p>
                        <p className="titlefonttext">标题</p>
                    </InputItem>
                    <DatePicker
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                        {...getFieldProps('time')}
                    >
                        <List.Item arrow="horizontal">
                            <p className="red">*</p>
                            <p className="titletimetext">预约时间</p>
                        </List.Item>
                    </DatePicker>
                    <InputItem
                        {...getFieldProps('username')}
                        placeholder="请输入姓名">
                        <p className="red">*</p>
                        <p className="titlefonttext">姓名</p>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('phone')}
                        placeholder="请输入电话">
                        <p className="red">*</p>
                        <p className="titlefonttext">电话</p>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('item')}
                        value="服务项目名称"
                        editable={false}>
                        <p>服务项目</p>
                    </InputItem>
                    <Item>
                        <Flex >
                            <Flex.Item style={{ color: '#f00', flex: 'none' }}>*</Flex.Item>
                            <Flex.Item style={{ color: '#000', flex: 'none' }}>服务地址</Flex.Item>
                            <Flex.Item>
                                <Radio className="my-radio">地图选择</Radio>
                            </Flex.Item>
                            <Flex.Item>
                                <Radio className="my-radio">省市区选择</Radio>
                            </Flex.Item>
                        </Flex>
                    </Item>
                    <Item arrow="horizontal" onClick={() => {}}>
                        选择地址
                    </Item>
                    <InputItem
                        {...getFieldProps('detailaddress')}
                        placeholder="请输入详细地址">
                        <p>详细地址</p>
                    </InputItem>
                    <TextareaItem
                        {...getFieldProps('describe')}
                        rows={3}
                        title="详细描述"
                        placeholder="请输入详细描述"
                    />
                </List>
                <div>

                </div>

            </div>
        )
    }
}

export default createForm()(Repairs)
