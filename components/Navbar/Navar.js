import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Button, Divider } from "antd";
//import {images} from '../../static/images/phonix.jpg'
import {UserOutlined} from '@ant-design/icons'
// import { fetchProfiles } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
import Input from "../Common/Input";
class Navbar extends Component {
  render() {
    return (
      <Layout className="navbar">
        <Row>
          <Col span={24} md={24} xs={24}>
            <Row className="p-10">
              <Col span={4} md={4} xs={0}></Col>
              <Col span={8} md={8} xs={12}>
                <div className="search-area">
                  <Input placeholder="Search" />
                  
                </div>
              </Col>
              <Col span={4} md={4} xs={12}>
                <span className="UserOutlined">
                    <UserOutlined />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.profiles
  };
};
function mapDispatchToProps(dispatch) {
  //   return {
  //     fetchProfiles: data => {
  //       dispatch(fetchProfiles(data));
  //     }
  //   };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
