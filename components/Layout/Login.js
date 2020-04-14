import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Input, Button, Divider } from "antd";
// import "../../static/css/style.scss";
class Login extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col span={14} md={14} xs={24}>
            Login Page
          </Col>
          <Col span={10} md={10} xs={24}>
            <Layout className="card">
              <p className="login-title">
                <h2>Welcome to </h2>
              </p>
              <Layout className="form-login">
                <Row>
                  <Col span={1} md={1} xs={1}>
                    <Icon type="mail" className="input-icon" />
                  </Col>
                  <Col span={23} md={23} xs={23}>
                    <Input placeholder="Email" className="email" />
                  </Col>
                  <Divider className="line" />
                </Row>

                <Row>
                  <Col span={1} md={1} xs={1}>
                    <Icon type="lock" className="input-icon" />
                  </Col>
                  <Col span={23} md={23} xs={23}>
                    <Input type="password" className="password" placeholder="input password" />
                  </Col>
                  <Divider className="line" />
                </Row>
                <Row>
                  <Col span={16} md={16} xs={24}></Col>
                  <Col span={8} md={8} xs={24}>
                    forgot password
                  </Col>
                </Row>
              </Layout>
              <Row>
                <Col span={1} md={1} xs={1}></Col>
                <Col span={22} md={22} xs={22}>
                  <Button className="btn-submit">SignIn</Button>
                </Col>
                <Col span={1} md={1} xs={1}></Col>
              </Row>
            </Layout>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Login;
