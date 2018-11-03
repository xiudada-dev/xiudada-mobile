import React,{ Component } from 'react'
import 'core-js/fn/object/assign';
import {
    Button,
    Tabs,
    InputItem,
    List,
    Checkbox,
    Icon,
    Carousel,
    WingBlank,
    Grid,
    ListView,
    WhiteSpace, Flex, SegmentedControl
} from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'
import $ from 'jquery'

import './style.css'
import {Card} from "antd-mobile/lib/card";

const data = [
    {
        username: "Y102PF-20181027-00001",
        time: "2018-10-27 10:59",
        content: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        username: "Y102PF-20181027-00001",
        time: "2018-10-27 10:59",
        content: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        username: "Y102PF-20181027-00001",
        time: "2018-10-27 10:59",
        content: '不是所有的兼职汪都需要风吹日晒',
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

class Message extends Component {
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
                    <div className="flexstyle">
                        <img className="imgstyle" src="/imgs/icon/buzou.png" alt="1"/>
                        <div className="textstyle">username</div>
                        <div className="timestyle">time</div>
                    </div>
                    <div className="flexstyle">
                        <div className="linestyle"></div>
                        <div className="contenstyle">content</div>
                    </div>
                </div>
            );
        };
        return(
            <div className="bgview">
                <div className="segmentedview">
                    <SegmentedControl
                        values={['工单详情', '工单留言']}
                        tintColor={'#47caa6'}
                        style={{ height: '40px', width: document.querySelector('body').offsetWidth/2 }}
                        className="segmentedstyle"
                        selectedIndex={1}
                    />
                </div>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (<div style={{ padding: 0, textAlign: 'center' }}>
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
        )
    }
}

export default Message