import React, { Component } from "react";
import {
  Breadcrumb,
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Carousel,
  Input,
  Button,
  Divider
} from "antd";
import Link from "next/link";
import {
  AndroidOutlined,
  TwitterOutlined,
  AppleOutlined,
  IeOutlined,
  GithubOutlined
} from "@ant-design/icons";
// import "../../static/css/style.scss";
import About1 from '../../pages/About1'
class SideMenuLeft extends Component {
  state = {};

  render() {
    return (
      <Layout className="list">
        <Row className="rowList">
          <AndroidOutlined />
          <Link href="/">
            <a title="About home page">About</a>
          </Link>
        </Row>
        <Row className="rowList">
          <AppleOutlined />
          <Link href="/">
            <a title="About home page">Developer</a>
          </Link>
        </Row>
        <Row className="rowList">
          <IeOutlined />
          <Link href="/">
            <a title="About home page">Career</a>
          </Link>
        </Row>
        <Row className="rowList">
          <GithubOutlined />
          <Link href="/">
            <a title="About home page">More</a>
          </Link>
        </Row>
        <Row className="rowList">
          <TwitterOutlined />
          <Link href="/">
            <a title="About home page">Help</a>
          </Link>
        </Row>
      </Layout>
    );
  }
}

export default SideMenuLeft;
