import React,{ Component } from 'react'
import { Button, InputItem, Tabs, List, ListView, SearchBar, Badge, Card, WingBlank, WhiteSpace, Flex, Icon } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'



const tabs = [
    { title: <Badge text={''}>已预约</Badge> },
    { title: <Badge text={''}>服务中</Badge> },
    { title: <Badge text={''}>待评价</Badge> },
    { title: <Badge text={''}>全部</Badge> },
];

const data = [
    {
        ordernum: "Y102PF-20181027-00001",
        title: 'Meet hotel',
        status: "已取消",
        itemtext: "维融 - fad",
        time: "2018-10-27 10:59",
        address: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        ordernum: "Y102PF-20181027-00001",
        title: 'Meet hotel',
        status: "已取消",
        itemtext: "维融 - fad",
        time: "2018-10-27 10:59",
        address: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        ordernum: "Y102PF-20181027-00001",
        title: 'Meet hotel',
        status: "已取消",
        itemtext: "维融 - fad",
        time: "2018-10-27 10:59",
        address: '不是所有的兼职汪都需要风吹日晒',
    },
];

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class OrderList extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }
    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} className="listback">
                    <WingBlank size="lg">
                        <WhiteSpace size="xs" />
                        <Card>
                            <Card.Body>
                                <div className="ordernum">工单号:{obj.ordernum}</div>
                                <div className="titletext">{obj.title}</div>
                                <div className="statustext">{obj.status}</div>
                                <div className="itemtext">{obj.itemtext}</div>
                                <Flex>
                                    <img className="icon" src="/imgs/icon/time.png" alt="1"/>
                                    <div className="timetext">{obj.time}</div>
                                </Flex>
                                <Flex>
                                    <img className="icon" src="/imgs/icon/address.png" alt="1"/>
                                    <div className="addresstext">{obj.address}</div>
                                </Flex>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </div>
            );
        };

        const row1 = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} className="listback">
                    <WingBlank size="lg">
                        <WhiteSpace size="xs" />
                        <Card>
                            <Card.Body>
                                <div className="ordernum">工单号:{obj.ordernum}</div>
                                <div className="titletext">{obj.title}</div>
                                <div className="statustext">{obj.status}</div>
                                <div className="itemtext">{obj.itemtext}</div>
                                <Flex>
                                    <img className="icon" src="/imgs/icon/time.png" alt="1"/>
                                    <div className="timetext">{obj.time}</div>
                                </Flex>
                                <Flex>
                                    <img className="icon" src="/imgs/icon/address.png" alt="1"/>
                                    <div className="addresstext">{obj.address}</div>
                                </Flex>
                                <div className="buttondiv">
                                    <a>
                                        <Flex justify={"center"}>
                                            <img className="icon" src="/imgs/icon/address.png" alt="1"/>
                                            <div className="addresstext">取消预约</div>
                                        </Flex>
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </div>
            );
        };
        return(
            <div >
                <div>
                    <SearchBar placeholder="请输入工单关键词进行搜索" maxLength={64} />
                </div>
                <div style={{height:document.querySelector('body').offsetHeight}}>
                    <Tabs tabs={tabs}
                          initialPage={0}
                          onChange={(tab, index) => { console.log('onChange', index, tab); }}
                          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <ListView
                            ref={el => this.lv = el}
                            dataSource={this.state.dataSource}
                            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                {this.state.isLoading ? 'Loading...' : '没有更多'}
                            </div>)}
                            renderRow={row1}
                            // renderSeparator={separator}
                            className="am-list"
                            pageSize={0}
                            useBodyScroll
                            onScroll={() => { console.log('scroll'); }}
                            scrollRenderAheadDistance={500}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={10}
                            initialListSize={20}
                        />
                        <ListView
                            ref={el => this.lv = el}
                            dataSource={this.state.dataSource}
                            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                {this.state.isLoading ? 'Loading...' : '没有更多'}
                            </div>)}
                            renderRow={row}
                            // renderSeparator={separator}
                            className="am-list"
                            pageSize={0}
                            useBodyScroll
                            onScroll={() => { console.log('scroll'); }}
                            scrollRenderAheadDistance={500}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={10}
                            initialListSize={20}
                        />
                        <ListView
                            ref={el => this.lv = el}
                            dataSource={this.state.dataSource}
                            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                {this.state.isLoading ? 'Loading...' : '没有更多'}
                            </div>)}
                            renderRow={row}
                            // renderSeparator={separator}
                            className="am-list"
                            pageSize={0}
                            useBodyScroll
                            onScroll={() => { console.log('scroll'); }}
                            scrollRenderAheadDistance={500}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={10}
                            initialListSize={20}
                        />
                        <div>
                            <div>
                                <p>全部</p>
                            </div>
                            <div>
                                <Flex>
                                    <Button>

                                    </Button>
                                    <Button>

                                    </Button>
                                    <Button>

                                    </Button>
                                </Flex>
                            </div>
                            <ListView
                                ref={el => this.lv = el}
                                dataSource={this.state.dataSource}
                                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                    {this.state.isLoading ? 'Loading...' : '没有更多'}
                                </div>)}
                                renderRow={row}
                                // renderSeparator={separator}
                                className="am-list"
                                pageSize={0}
                                useBodyScroll
                                onScroll={() => { console.log('scroll'); }}
                                scrollRenderAheadDistance={500}
                                onEndReached={this.onEndReached}
                                onEndReachedThreshold={10}
                                initialListSize={20}
                            />
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default OrderList