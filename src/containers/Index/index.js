import React,{ Component } from 'react'
import 'core-js/fn/object/assign';
import { Button, Tabs, InputItem, List, Checkbox, Icon, Carousel, WingBlank, Grid } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'
import $ from 'jquery'

import './style.css'
import PicPlay from "./PicPlay";


const data = Array.from(new Array(4)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `服务名称${i}`,
}));

const data1 = Array.from(new Array(5)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `服务名称${i}`,
}));

class index extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return(
            <div>
                <Carousel className="space-carousel"
                          frameOverflow="visible"
                          cellSpacing={10}
                          slideWidth={0.8}
                          autoplay
                          infinite
                          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => this.setState({ slideIndex: index })}
                >
                    {this.state.data.map((val, index) => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                        // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });}}
                            />
                        </a>
                    ))}
                </Carousel>
                <div className="hot">
                    <div className="green"></div>
                    <p>推荐服务</p>
                </div>
                <Grid data={data}
                      columnNum={4}
                      hasLine={false}
                      square={false}
                      className="not-square-grid"
                      renderItem={dataItem => (
                          <div style={{ padding: '0px' }}>
                              <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                              <div style={{ color: '#888', fontSize: '12px', marginTop: '0px' }}>
                                  <span>{dataItem.text}</span>
                              </div>
                          </div>
                      )}
                />
                <div className="type">
                    <div className="green"></div>
                    <p>推荐类别</p>
                </div>
                <Grid data={data1}
                      columnNum={4}
                      hasLine={false}
                      square={false}
                      className="not-square-grid"
                      renderItem={dataItem => (
                          <div style={{ padding: '0px' }}>
                              <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                              <div style={{ color: '#888', fontSize: '12px', marginTop: '0px' }}>
                                  <span>{dataItem.text}</span>
                              </div>
                          </div>
                      )}
                />
            </div>
        )
    }
}

export default index