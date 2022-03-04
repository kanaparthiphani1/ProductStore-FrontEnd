import React, { useState } from "react";
import "./index.css";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function Sidebar() {
  const [collapedState, setCollapsedState] = useState(false);

  const collapsed = () => {
    setCollapsedState(!collapedState);
  };
  return (
    <Sider
      onCollapse={collapsed}
      collapsible
      style={{ maxWidth: "100px", minHeight: "100vh" }}
      className="slider"
    >
      <div className="logo-outer-cont">
        <div className="logo-cont">
          <img className="logo" src="logo1.png" alt="logo" />
        </div>
        {!collapedState && <h1 style={{ color: "white" }}>KP Store</h1>}
      </div>

      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">
          Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
        <Link to="/settings">
          Settings
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
