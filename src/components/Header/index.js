import React from "react";
import { Layout, Menu, Breadcrumb, Avatar, Space, Dropdown } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./index.css";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function HeaderComp() {
  function handleMenuClick(e) {
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  return (
    <Header style={{ maxWidth: "100vw" }} className="menu-items">
      <Space wrap>
        <Dropdown overlay={menu}>
          <Avatar className="icon" size="large" icon={<UserOutlined />} />
        </Dropdown>
      </Space>
    </Header>
  );
}

export default HeaderComp;
