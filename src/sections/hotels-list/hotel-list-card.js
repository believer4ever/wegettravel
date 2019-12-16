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
          </Col>
          <Col xl={{ span: 17 }}>
              <div className="hotel-card-gray">
                  sdfsdfsdfsdfsdfsdf
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}
