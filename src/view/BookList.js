import React from 'react';
import { Layout, Row, Col} from 'antd';
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import BookChart from "../components/BookChart";
import {Link ,withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import "../css/MainPage.css"
import {BookInfo} from "../components/BookInfo";

const { Header, Footer, Sider, Content } = Layout;

export class BookList extends React.Component {
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
                                <BookChart />
                            </div>
                        </Content>
                    </Layout>
                    <Footer>&copy; SJTU 2022;</Footer>
                </Layout>
            </div>
        );

    }
}

export default withRouter(BookList);