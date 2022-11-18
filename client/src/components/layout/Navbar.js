import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  UserOutlined,
  LoginOutlined,
  HomeOutlined,
  DownOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userAuth } = useSelector((state) => ({ ...state }));
  console.log("มาจากรีดักน่ะ", userAuth.user);
  // console.log('NavBar', user)
  const logouts = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="person" icon={<UserOutlined />}>
          Person
        </Menu.Item>
        {!userAuth.user && (
          <Menu.Item
            style={{ marginLeft: "auto" }}
            key="login"
            icon={<LoginOutlined />}
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}

        {!userAuth.user && (
          <Menu.Item key="register" icon={<MailOutlined />}>
            <Link to="/register">Register</Link>
          </Menu.Item>
        )}

        {userAuth.user && (
          <Menu.SubMenu
            style={{ marginLeft: "auto" }}
            key="SubMenu"
            title={userAuth.user.name}
            icon={<DownOutlined />}
          >
            <Menu.Item key="logout" onClick={logouts} icon={<LogoutOutlined />}>
              Loout
            </Menu.Item>
          </Menu.SubMenu>
        )}
      </Menu>
    </>
  );
};

export default Navbar;
