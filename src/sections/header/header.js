import React, { Component } from 'react';
import { Row, Col, Input, Menu, Icon, Dropdown } from 'antd';
import './header.css';
import SearchForm from './searchform';
class Header extends Component {
    render() {
      const lang = (
        <Menu className="black navbar-dropdowns">
          <Menu.Item key="0">
            <a href="http://www.alipay.com/">English (En)</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="http://www.taobao.com/">Uzbek (Uz)</a>
          </Menu.Item>
        </Menu>
      );
      const currency = (
        <Menu className="black navbar-dropdowns">
          <Menu.Item key="0">
            <a href="http://www.alipay.com/">USD</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="http://www.taobao.com/">RUB</a>
          </Menu.Item>
        </Menu>
      );
      const user = (
        <Menu className="black navbar-dropdowns">
          <Menu.Item key="0">
            <a href="http://www.alipay.com/">Зарегистрировать свой объект</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="http://www.taobao.com/">Войти</a>
          </Menu.Item>
        </Menu>
      );
      return (
        <div className="bg">
            <div className="gradient">
            <div>
            <Row className="navbar">
                <Col xs={2} sm={4} md={6} lg={8} xl={10} className="brand">
                  <img src={require('./img/WeGetTravel.png')} className="logo" /> 
                </Col>
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 16, offset: 4 }} md={{ span: 12, offset: 6 }} 
                lg={{ span: 8, offset: 8 }} xl={{ span: 6, offset: 8 }} className="dropdowns text-align-right">
                  <Dropdown overlay={lang} trigger={['click']}>
                    <a className="ant-dropdown-link navbar-link" href="#">
                      <img src={require('../header/img/russia.png')} className="lang-img" /> RU <Icon type="down" />
                    </a>
                  </Dropdown>
                  <Dropdown overlay={currency} trigger={['click']}>
                    <a className="ant-dropdown-link navbar-link" href="#">
                      UZS <Icon type="down" />
                    </a>
                  </Dropdown>
                  <Dropdown overlay={user} trigger={['click']} placement="bottomRight">
                    <a className="ant-dropdown-link navbar-link" href="#">
                    <Icon type="user" /> <Icon type="down" />
                    </a>
                  </Dropdown>
                </Col>
            </Row>
            <Row className="header-title" style={{ marginTop: '2vw' }}>
            <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 1, span: 22 }} md={{ offset: 4, span: 16 }} 
                lg={{ offset: 2, span: 20 }} xl={{ offset: 6, span: 16 }}>
                <div className="text-align-right header-text">
                  <p className="padding0 text fs36">Поиск и бронирование отелей</p>
                  <p className="padding0 text fs160">УЗБЕКИСТАНА</p>
                </div>
            </Col>
            </Row>
            <Row>
            <SearchForm />
            </Row>
            </div>
            </div>
        </div>
      );
    }
}
  
export default Header;