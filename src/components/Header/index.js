import React from "react";
import { Layout, Menu, Breadcrumb, Avatar, Space, Dropdown } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./index.css";
import {
  HomeOutlined,
  MenuOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

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

  const mainMenu = (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingsOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ maxWidth: "100vw" }} className="menu-items">
      <div className="large-cont">
        <Space wrap>
          <Dropdown overlay={menu}>
            <Avatar className="icon" size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Space>
      </div>
      <div className="small-cont">
        <div className="logo-outer-cont">
          <div className="logo-cont">
            <img className="logo" src="logo1.png" alt="logo" />
          </div>
          <h1 style={{ color: "white" }}>KP Store</h1>
        </div>
        <Space wrap>
          <Dropdown
            overlay={mainMenu}
            className="dropdown"
            trigger={["click"]}
            onClick={(e) => e.preventDefault()}
          >
            <MenuOutlined
              style={{ fontSize: "50px", color: "white", marginTop: "20px" }}
            />
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
}

export default HeaderComp;
