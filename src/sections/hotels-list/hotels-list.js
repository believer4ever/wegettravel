import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Slider,
  Button,
  Menu,
  Icon,
  Checkbox,
  Dropdown,
  Carousel,
  
} from "antd";
import Filter from "./filter";
import { Line, Circle } from "rc-progress";
import { FiMapPin, FiCalendar, FiUser } from "react-icons/fi";
import { FaDollarSign, FaStar, FaHotel } from "react-icons/fa";
import HotelCardList from "./hotel-list-card"
const InputGroup = Input.Group;
function onChange(value) {
  console.log("onChange: ", value);
}

function onAfterChange(value) {
  console.log("onAfterChange: ", value);
}
const menu = (
  <Menu className="border-top-left0">
    <p className="padding-top-5px">Тип размещения</p>
    <div>
      <Checkbox>
        <span className="checkbox-text">Отель (152)</span>
      </Checkbox>
      <br />
      <Checkbox>
        <span className="checkbox-text">Хостел (31)</span>
      </Checkbox>
      <br />
      <Checkbox>
        <span className="checkbox-text">Гостевой дом (28)</span>
      </Checkbox>
      <br />
      <Checkbox>
        <span className="checkbox-text">Вилла (1)</span>
      </Checkbox>
      <br />
      <Checkbox>
        <span className="checkbox-text">Апартаменты (106)</span>
      </Checkbox>
    </div>
  </Menu>
);
const place = (
  <Menu className="border-top-left0 top-bar-item ">
    <p> Расположение от центра города</p>
    <div>
      <Row>
        <Col xl={{ span: 12 }}>
          <Slider defaultValue={30} />
        </Col>
        <Col xl={{ span: 12 }}>
          <Input defaultValue="30 км" />
        </Col>
      </Row>
    </div>
    <p className="padding-top-5px">Районы города:</p>
    <div>
      <Checkbox>
        <span className="checkbox-text">Регистан</span>
      </Checkbox>
      <br />
      <Checkbox>
        <span className="checkbox-text">Гур-Эмир</span>
      </Checkbox>
      <br />
      <Checkbox>
        <span className="checkbox-text">Шахи Зинда</span>
      </Checkbox>
      <br />
      <Checkbox>
        <span className="checkbox-text">Биби Ханым</span>
      </Checkbox>
      <br />
    </div>
  </Menu>
);
const price = (
  <Menu className="border-top-left0 top-bar-item width20vw">
    <p>Цена за ночь в UZS</p>
    <div>
      <Slider
        range
        step={10}
        defaultValue={[0, 100]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <Row className="padding-top-5px">
        <Col xl={{ span: 12 }}>
          от <Input style={{ width: "80%" }} defaultValue="100000" />
        </Col>
        <Col xl={{ span: 12 }}>
          до <Input style={{ width: "80%" }} defaultValue="700000" />
        </Col>
      </Row>
    </div>
  </Menu>
);
const stars = (
  <Menu className="border-top-left0 top-bar-item">
    <p>Количество звёзд</p>
    <div>
      <Checkbox className="padding-top-5px">
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
      </Checkbox>
      <br />
      <Checkbox className="padding-top-5px">
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
      </Checkbox>
      <br />
      <Checkbox className="padding-top-5px">
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
      </Checkbox>
      <br />
      <Checkbox className="padding-top-5px">
        <Icon type="star" theme="filled" />
        <Icon type="star" theme="filled" />
      </Checkbox>
      <br />
      <Checkbox className="padding-top-5px">
        <Icon type="star" theme="filled" />
      </Checkbox>
      <br />
      <Checkbox className="padding-top-5px">
        <span className="checkbox-text">Без звёзд</span>
      </Checkbox>
    </div>
  </Menu>
);
class HotelsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
    };
  }
  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };
  handleVisibleChange1 = flag => {
    this.setState({ visible1: flag });
  };
  handleVisibleChange2 = flag => {
    this.setState({ visible2: flag });
  };
  handleVisibleChange3 = flag => {
    this.setState({ visible3: flag });
  };
  render() {
    return (
      <Row>
        <Col xl={{ span: 5 }} className="hotels-filter">
          <Filter />
        </Col>
        <Col xl={{ span: 19 }}>
          <Row>
            <Col xl={{ span: 24 }} className="top-bar">
              <Dropdown
                overlay={place}
                placement="bottomLeft"
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
                trigger={["click"]}
              >
                <Button className="hotels-top-dropdowns">
                  {" "}
                  <FiMapPin />{" "}
                  <span className="hotels-top-dropdowns-text">
                    Расположение
                  </span>
                </Button>
              </Dropdown>
              <Dropdown
                overlay={price}
                className="marginleft"
                placement="bottomLeft"
                onVisibleChange={this.handleVisibleChange1}
                visible={this.state.visible1}
                trigger={["click"]}
              >
                <Button className="hotels-top-dropdowns">
                  {" "}
                  <FaDollarSign />{" "}
                  <span className="hotels-top-dropdowns-text">Цена</span>
                </Button>
              </Dropdown>
              <Dropdown
                overlay={stars}
                className="marginleft"
                placement="bottomLeft"
                onVisibleChange={this.handleVisibleChange2}
                visible={this.state.visible2}
                trigger={["click"]}
              >
                <Button className="hotels-top-dropdowns">
                  {" "}
                  <FaStar />{" "}
                  <span className="hotels-top-dropdowns-text">Звезды</span>
                </Button>
              </Dropdown>
              <Dropdown
                overlay={menu}
                className="marginleft"
                pplacement="bottomLeft"
                onVisibleChange={this.handleVisibleChange3}
                trigger={["click"]}
              >
                <Button className="hotels-top-dropdowns">
                  {" "}
                  <FaHotel />{" "}
                  <span className="hotels-top-dropdowns-text">
                    Тип размещения
                  </span>
                </Button>
              </Dropdown>
              <Input
                className="search-key marginleft"
                placeholder="Поиск по отелю или ключевому слову"
                prefix={
                  <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            </Col>
            <Col xl={{ span: 18 }}>
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
              <HotelCardList img={['https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67829listing-29.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67825listing-25.jpg', 'https://listing-themes.com/selio-wp/wp-content/uploads/sw_win/files/strict_cache/851x67824listing-24.jpg']} />
            </Col>
            <Col xl={{ span: 6 }} className="hotels-right-sidebar">
              <div className="right-card">
                <Row>
                  <Col xl={{ span: 12 }} className="per-circle">
                    <Circle
                      percent="60"
                      strokeWidth="3"
                      trailColor="#454953"
                      strokeColor="#CE3D29"
                    />
                    <span className="percentage">60%</span>
                  </Col>
                  <Col xl={{ span: 12 }} className="percentage-text-p">
                    <span className="percentage-text">
                      Гостиниц в Самарканде уже занято
                    </span>
                  </Col>
                </Row>
                <p className="percentage-text-sub">
                  Поторопитесь, пока есть из чего выбирать!
                </p>
              </div>
              <div className="right-card prelative mrtop1em">
                <img
                  src={require("../header/img/bg.jpg")}
                  className="right-hotel-card-img"
                />
                <div className="promo-circle">FREENIGHT</div>
                <div className="mrtop1em">
                  <a className="right-hotel-card-title">Bibikhanum Hotel</a>
                  <p className="right-hotel-card-text">
                    Гостевой дом Bibikhanum Hotel дарит бесплатную ночь при
                    оплате сразу за 10 дней. Акция ограничена - торопитесь!{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default HotelsList;
