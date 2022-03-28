import React from 'react';
import { Layout, Row, Col, Tag, Space, Button, Form} from 'antd';
import TopBar from "../components/TopBar";
import {Link ,withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import "../css/Order.css"
import {OrderChart} from "../components/OrderChart";
const { Header, Footer, Sider, Content } = Layout;


export class Order extends React.Component {
    render() {
        return(
            <div className="mainpage-background">
                <Layout>
                    <Header>
                        <TopBar />
                    </Header>
                    <br />
                    <br />
                    <div className="order-background">
                        <OrderChart />
                    </div>
                    <Footer>&copy; SJTU 2022;</Footer>
                </Layout>
            </div>
        );
    }
}

export default withRouter(Order);