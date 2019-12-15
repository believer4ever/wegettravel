import React, { Component } from "react";
import { Row, Col, Input, Menu, Icon, Affix, Dropdown } from "antd";
import "./hotel-header.css";
import SearchForm from "../header/searchform";
class HotelHeader extends Component {
  render() {
    const lang = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">English (En)</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">Uzbek (Uz)</a>
        </Menu.Item>
      </Menu>
    );
    const currency = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">USD</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">RUB</a>
        </Menu.Item>
      </Menu>
    );
    const user = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://join.hotelier.uz">Зарегистрировать свой объект</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">Войти</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="bg">
        <div className="gradient">
          <div className="gradient">
            <Row className="navbar">
              <Col xs={2} sm={4} md={6} lg={8} xl={10} className="brand">
                <img
                  onClick={() => window.location.href="/"}
                  src={require("../header/img/WeGetTravel.png")}
                  className="logo"
                />
              </Col>
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                md={{ span: 12, offset: 6 }}
                lg={{ span: 8, offset: 8 }}
                xl={{ span: 6, offset: 8 }}
                className="dropdowns text-align-right"
              >
                <Dropdown overlay={lang} trigger={["click"]}>
                  <a className="ant-dropdown-link navbar-link" href="#">
                    RU <Icon type="down" />
                  </a>
                </Dropdown>
                <Dropdown overlay={currency} trigger={["click"]}>
                  <a className="ant-dropdown-link navbar-link" href="#">
                    UZS <Icon type="down" />
                  </a>
                </Dropdown>
                <Dropdown
                  overlay={user}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <a className="ant-dropdown-link navbar-link" href="#">
                    <Icon type="user" /> <Icon type="down" />
                  </a>
                </Dropdown>
              </Col>
            </Row>
            <Affix offsetTop="0">
              <Row className="sub-navbar">
                <SearchForm />
              </Row>
            </Affix>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelHeader;
