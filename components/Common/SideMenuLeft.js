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
          <Link href ='/about'>About</Link>
        </Row>
        <Row className="rowList">
          <AppleOutlined />
          <Link href="/developer">
            Developer
          </Link>
        </Row>
        <Row className="rowList">
          <IeOutlined />

          <Link href='/career'>Career</Link>
        </Row>
        <Row className="rowList">
          <GithubOutlined />
          <Link href="/more">
            More
          </Link>
        </Row>
        <Row className="rowList">
          <TwitterOutlined />
          <Link href="/help">
           Help
          </Link>
        </Row>
      </Layout>
    );
  }
}

export default SideMenuLeft;
