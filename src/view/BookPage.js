import React from 'react';
import { Layout, Row, Col, Button} from 'antd';
import TopBar from "../components/TopBar";
import {Link ,withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import "../css/BookPage.css"

const { Header, Footer, Sider, Content } = Layout;

export class BookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {book:[]};
    }
    componentDidMount() {
        const callback = (data) => {
            this.setState({book:data});
        };
    }
    render(){
        return(
            <div className="mainpage-background">
                <Layout>
                    <Header>
                        <TopBar />
                    </Header>
                    <br />
                    <br />
                    <Row>
                        <Col span={12}>
                            <div className="bookpage-pic">
                                {this.props.data.img}
                            </div>
                        </Col>
                        <Col span={12}>
                            <h1>{this.props.data.name}</h1>
                            <p><b>作者：</b>{this.props.data.author}</p>
                            <p><b>分类：</b>{this.props.data.category}</p>
                            <p><b>定价：</b>{this.props.data.price}</p>
                            <p><b>状态：</b>{this.props.data.states?'有货':'无货'}<span style={{color: "gray", fontSize: 10}}> 库存<span>{this.props.data.num}</span>件</span></p>
                            <Link to="/order"><Button type="primary">立即购买 &raquo;</Button></Link>
                            <Link to="/order"><Button>加入购物车 &raquo;</Button></Link>
                        </Col>
                    </Row>
                    <Footer>&copy; SJTU 2022;</Footer>
                </Layout>
            </div>
        );

    }
}
export default withRouter(BookPage);
