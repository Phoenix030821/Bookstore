import React from 'react';
import { Layout, Button, Image} from 'antd';
import {Link, withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
//import '../css/BookInfo.css';

export class BookInfo extends React.Component {
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
            <div>
                <Layout>
                    <div>{this.props.data.img}</div>
                </Layout>
                <Layout>
                    <p style={{textAlign: "center", fontSize: 30}}>{this.props.data.name}</p>
                </Layout>
                <layout>
                    <p style={{color: "red", fontSize: 20, textAlign: "center"}}>{this.props.data.price}</p>
                </layout>
                <layout>
                    <Link to={this.props.data.link}><Button size="large" type="ghost">View Details &raquo;</Button></Link>
                </layout>
            </div>
        );
    }
}