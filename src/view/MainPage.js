import React from 'react';
import { Layout, Row, Col} from 'antd';
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Carousels from "../components/Carousels";
import {Link ,withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import "../css/MainPage.css"
import {BookInfo} from "../components/BookInfo";
const { Header, Footer, Sider, Content } = Layout;


const bookdata = [
    {
        img: <img src={require("../../public/Java.jpg")} alt="1" />,
        name: 'Java入门',
        price: '¥35.1',
        link: './bookpage/java',
    },
    {
        img: <img src={require("../../public/53.jpg")} alt="1" />,
        name: '五年高考三年模拟',
        price: '¥45.1',
        link: './bookpage/53',
    },
    {
        img: <img src={require("../../public/Csapp.jpg")} alt="1" />,
        name: '深入理解计算机系统',
        price: '¥105.5',
        link: './bookpage/csapp',
    },
];
export class MainPage extends React.Component {
    render(){
        return(
            <div className="mainpage-background">
                <Layout>
                    <Header>
                        <TopBar />
                    </Header>
                    <br />
                    <br />
                    <Layout>
                        <Sider>
                            <SideBar />
                        </Sider>
                        <Content>
                            <div className="bookinfo-background">
                                <Layout>
                                    <Carousels />
                                </Layout>
                                <Row>
                                    <Col span={8}>
                                        <BookInfo data={bookdata[0]} />
                                    </Col>
                                    <Col span={8}>
                                        <BookInfo data={bookdata[1]} />
                                    </Col>
                                    <Col span={8}>
                                        <BookInfo data={bookdata[2]} />
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                    </Layout>
                    <Footer>&copy; SJTU 2022;</Footer>
                </Layout>
            </div>
        );

    }
}
export default withRouter(MainPage);
