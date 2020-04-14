import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Input, Button, Divider } from "antd";
import { fetchProfiles } from "../../redux/actions/dashboardAction";
import { connect } from "react-redux";
import SideMenuLeft from "../Common/SideMenuLeft";
// import "../../static/css/style.scss";
class Dashboard extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchProfiles();
  }
  displayList = data => {
    const list =
      data.users &&
      data.users.map((item, index) => (
        <Col md={12} key={item._id}>
          <div className="profile-card">
            <span>X</span>
            <div className="card-img">
              <img src={item.profileUrl} className="profile-img" />
            </div>
            <p className="name">{item.name}</p>
          </div>
        </Col>
      ));
    return list;
  };
  render() {
    const { users } = this.props;
    console.log("your users....", users);
    return (
      <Layout>
        <Row>
          <Col span={4} md={4} xs={24} className="sidenav">
            <Row>
              <SideMenuLeft />
            </Row>
          </Col>
          <Col span={12} md={12} xs={24}>
            <Row>{this.props.users && this.displayList(users)}</Row>
          </Col>
          <Col span={4} md={4} xs={24}>
            Dashboard
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
  return {
    fetchProfiles: data => {
      dispatch(fetchProfiles(data));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
