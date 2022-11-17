import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  UserOutlined,
  LoginOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>

        <Menu.Item key="person" icon={<UserOutlined />}>
          Person
        </Menu.Item>

        <Menu.Item
          style={{ marginLeft: "auto" }}
          key="login"
          icon={<LoginOutlined />}
        >
         <Link to='/login'>Login</Link>
        </Menu.Item>

        <Menu.Item key="register" icon={<MailOutlined />}>
        <Link to='/register'>Register</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
