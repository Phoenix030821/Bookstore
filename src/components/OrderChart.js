import React from 'react';
import { Table, Input, Button, Space, Tag, InputNumber, Form} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import {Link, withRouter} from "react-router-dom";
import 'antd/dist/antd.css';

const data = [
    {
        key: '1',
        name: 'Java核心技术卷II',
        price: <p style={{color: "red", fontSize: 20}}>¥35.1</p>,
        img: <img src={require("../../public/Java.jpg")} alt="1" />,
        num: <InputNumber min={0} max={5} />,
    },
    {
        key: '2',
        name: '深入理解计算机系统',
        price: <p style={{color: "red", fontSize: 20}}>¥105.5</p>,
        img: <img src={require("../../public/Csapp.jpg")} alt="2" />,
        num: <InputNumber min={0} max={5} />,
    },
    {
        key: '3',
        name: '5年高考 3年模拟',
        price: <p style={{color: "red", fontSize: 20}}>¥45.1</p>,
        img: <img src={require("../../public/53.jpg")} alt="3" />,
        num: <InputNumber min={0} max={5} />,
    },
];

const columns = [
    {
        title: '图书',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '',
        dataIndex: 'img',
        key: 'img',
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '数量',
        dataIndex: 'num',
        key: 'num',
    },
];

export class OrderChart extends React.Component {
    render() {
        return(
            <div className="mainpage-background">
                <Table columns={columns} dataSource={data} />
                <div style={{textAlign: "right"}}>
                    <Button type="primary" size="large">立即支付</Button>
                </div>
            </div>

        );

    }
}

export default withRouter(OrderChart);
