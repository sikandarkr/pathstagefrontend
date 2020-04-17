import React, { Component } from "react";
import Link from "next/link"
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Input, Button, Divider } from "antd";
import {UserOutlined,WechatOutlined,GlobalOutlined} from "@ant-design/icons"
class SideMenuLeft extends Component {
  state = {};

  render() {
    return (
      <Layout className="list">
        <Row className="rowlist">
          <UserOutlined />
          <Link href="">
            <a href ="/">About</a>
          </Link>
        </Row>
        <Row className="rowlist">
          <UserOutlined />
          <Link href="">
            <a href ="/">Devloper</a>
          </Link>
        </Row>
        <Row className="rowlist">
        <GlobalOutlined />
          <Link href="">
            <a href ="/">Career</a>
          </Link>
        </Row>
        <Row className="rowlist">
          <UserOutlined />
          <Link href="">
            <a href ="/">More</a>
          </Link>
        </Row>
        <Row className="rowlist">
        <WechatOutlined />
          <Link href="">
            <a href ="/">Help</a>
          </Link>
        </Row>
      </Layout>
    );
  }
}

export default SideMenuLeft;
