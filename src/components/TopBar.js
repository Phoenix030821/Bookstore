import React from 'react';
import {PageHeader, Button, Descriptions} from "antd";
import '../css/TopBar.css';
import 'antd/dist/antd.css';
import {Link, withRouter} from "react-router-dom";

export class TopBar extends React.Component {

    render() {
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    title={<Link to={"/"}>Bookstore</Link>}
                    subTitle="Welcome, ThunderBoy."
                    extra={[
                        <Link to={"/"}><Button key="3" type="primary">MainPage</Button></Link>,
                        <Link to={"/order"}><Button key="2">My Cart</Button></Link>,
                        <Link to={"/order"}><Button key="1">My Orders</Button></Link>,
                    ]}
                >
                </PageHeader>
            </div>
        );
    }
}
export default withRouter(TopBar);