import React,{ Component } from 'react'
import 'core-js/fn/object/assign';
import { Button, Tabs, InputItem, List, Checkbox, Icon, Carousel, WingBlank, Grid, Checkbox } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'
import $ from 'jquery'

import './style.css'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Appraise extends Component {
    onChange = (val) => {
        console.log(val);
    }
    render() {
        // const data = [
        //     { value: 0, label: 'Ph.D.' },
        //     { value: 1, label: 'Bachelor' },
        //     { value: 2, label: 'College diploma' },
        // ];
        return(
            <div>
                <div>
                    <img/>
                </div>
                <div>
                    title
                </div>
                <div>
                    <div>
                        你的问题是否已解决？
                    </div>
                    <div>
                        <div>
                            <CheckboxItem onChange={() => this.onChange(0)}>
                                "已解决"
                            </CheckboxItem>
                        </div>
                        <div>
                            <CheckboxItem onChange={() => this.onChange(1)}>
                                "未解决"
                            </CheckboxItem>
                        </div>
                    </div>
                </div>
                <div>
                    服务质量
                </div>
                <div>

                </div>
                <div>
                    服务态度
                </div>
                <div>

                </div>
                <div>
                    处理速度
                </div>
                <div>

                </div>
                <div>
                    您对我们的服务有什么建议？
                </div>
                <div className="questionbg">
                    <TextareaItem
                        {...getFieldProps('count', {
                            initialValue: '写下您对我们本次服务的意见与评价吧～',
                        })}
                        rows={5}
                        count={200}
                    />
                </div>
                <div>
                    图片描述
                </div>
                <div className="imgView">
                    <img className="addimg" src="/imgs/icon/tianjiatupian.png" alt="1" />
                    <img className="addimg" src="/imgs/icon/tianjiatupian.png" alt="1" />
                    <img className="addimg" src="/imgs/icon/tianjiatupian.png" alt="1" />
                </div>
                <div>
                    <Button>查看工单详情</Button>
                </div>
                <div>
                    <Button>评价完成</Button>
                </div>
            </div>
        )
    }
}

export default Appraise