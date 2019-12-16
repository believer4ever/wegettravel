import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Menu,
  Checkbox,
  Slider,
  Icon,
  Button,
  Dropdown,
  Carousel,
  Select
} from "antd";
import { FiMapPin} from "react-icons/fi";
export default class HotelCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      active: 0,
      current: 1,
      loading: true
    };
    this.next = this.next.bind(this);
    this.onChange = this.onChange.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  onChange(a) {
    this.setState({ current: a + 1 });
  }
  previous() {
    this.carousel.prev();
  }
  leftClick() {
    if (this.state.active === 0) {
      this.setState({ active: this.state.img.length - 1 });
    } else {
      this.setState({ active: this.state.active - 1 });
    }
  }
  rightClick() {
    if (this.state.active === this.state.img.length - 1) {
      this.setState({ active: 0 });
    } else {
      this.setState({ active: this.state.active + 1 });
    }
  }
  render() {
    const items = []
    var i;
    for (i = 0; i < this.props.img.length; i++) {
      items.push(<div className="hotel-card-slider prelative"><img src={this.props.img[i]} /><div className="overlaygradient"></div></div>)
    }
    return (
      <div className="hotel-card-list">
        <Row>
          <Col xl={{ span: 7 }} className="prelative">
            <Carousel ref={node => (this.carousel = node)} autoplay afterChange={this.onChange}>
              { items }
            </Carousel>
            <div className="controls">
                <Icon type="left" onClick={this.previous} />
                <span>{ this.state.current } / { this.props.img.length }</span>
                <Icon type="right" onClick={this.next} />
            </div>
            <Icon type="heart" className="like-heart" />
          </Col>
          <Col xl={{ span: 17 }} style={{ paddingRight: '1vw' }}>
              <div className="hotel-card-gray-top prelative">
              <div className="rating-card">
                <span className="rating-top">Рейтинг</span> <br />
                <span className="rating-bottom">284 отзыва</span>
              </div>
                <span className="hotel-card-review-rect">
                  8.7
                </span>
                <p className="fs18 hotel-card-hotelname">Отель International Hotel Tashkent</p>
                <div>
                  <Icon type="star" theme="filled" />
                  <Icon type="star" theme="filled" />
                  <Icon type="star" theme="filled" />
                  <Icon type="star" theme="filled" />
                  <Icon type="star" theme="filled" />
                  <span className="hotel-card-place"><FiMapPin /> Ташкент, Мирзо-Улугбекский район</span>
                </div>
              </div>
              <div className="hotel-card-gray-center">
                  <Row>
                    <Col xl={{ span: 8 }}>
                      <p className="standart-room">Стандартный номер</p>
                      <p className="hotel-facilities">
                        <img src={require('../header/img/facilities/wifi.png')} />
                        <img src={require('../header/img/facilities/parking.png')} />
                        <img src={require('../header/img/facilities/teddy-bear.png')} />
                        <img src={require('../header/img/facilities/pets.png')} />
                        <img src={require('../header/img/facilities/fan.png')} />
                      </p>
                    </Col>
                    <Col xl={{ span: 8 }}>
                      <p className="hotel-price">от 234 тыс. UZS</p>
                      <p className="capacity">за ночь для 2 гостей</p>
                    </Col>
                    <Col xl={{ span: 8 }}>
                      <p className="hotel-facilities1"><img src={require('../header/img/facilities/pitanie.png')} />  Питание включено</p>
                      <p className="hotel-facilities1"><img src={require('../header/img/facilities/free-cancel.png')} />  Беспл. отмена</p>
                      <p className="hotel-facilities1"><img src={require('../header/img/facilities/pay.png')} />  Оплата наличными</p>
                    </Col>
                  </Row>
              </div>
              <div className="hotel-card-gray-bottom">
                <Button type="primary" className="select-room-button">Выбрать номер</Button>
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}
