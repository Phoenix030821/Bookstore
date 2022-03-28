import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Link,withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import "../css/SideBar.css";
const { SubMenu } = Menu;

export class SideBar extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <div className="sidebar-back">
                <Menu
                    style={{ width: 256 , height: 1000}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Link to="/"><Menu.Item key="1">首页推荐</Menu.Item></Link>
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="图书分类">
                        <Link to="/booklist"><Menu.Item key="5">网络技术</Menu.Item></Link>
                        <Link to="/booklist"><Menu.Item key="6">人文社科</Menu.Item></Link>
                        <Link to="/booklist"><Menu.Item key="7">自然科学</Menu.Item></Link>
                        <Link to="/booklist"><Menu.Item key="8">时事政治</Menu.Item></Link>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default withRouter(SideBar);