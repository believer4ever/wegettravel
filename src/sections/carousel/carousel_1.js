import React, { Component } from 'react';
import { Row, Col, Input, Menu, Icon, Dropdown, Carousel } from 'antd';
import Card from './card'
import './carousel.css';
class CarouselSection extends Component {
    render() {
      return (
        <Row className="carouselsection">
            <Col xl={{ offset: 3, span: 18 }}>
            <div className="text1">
                <p className="fs36" style={{ lineHeight: 0 }}>Вам выбирать, где лучше жить...</p>
                <p className="fs24 gray">Weget подскажет варианты</p>
            </div>
            {/* <Row>
              <Col md={{ span: 12 }}>
                      <Card img={require('../header/img/carousel1.jpg')} 
                        active="1"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
              </Col>
              <Col md={{ span: 12 }}>
                      <Card img={require('../header/img/carousel1.jpg')} 
                        active="1"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
              </Col>
            </Row> */}
            <Carousel className="mobile-none">
                <div>
                  <Row>
                    {/* <Fade left> */}
                      <Col lg={{ span: 12 }}>
                        <Card img={require('../header/img/carousel1.jpg')} 
                        active="1"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                        <Card img={require('../header/img/carousel2.jpg')} 
                        active="0"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                        <Card img={require('../header/img/carousel3.jpg')} 
                        active="0"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                      </Col>
                    {/* </Fade> */}
                    {/* <Fade right> */}
                      <Col lg={{ span: 12 }}>
                        <div className="carousel-card-poster">
                          <img className="img1" src={require('../header/img/samarkand.jpg')} />
                          <span className="carousel-card-city">Самарканд</span>
                          <div className="carousel-card-bg">
                            <p className="fs20">Цена за ночь:</p>
                            <p className="fs16 pdtop10">от 60 тыс. <span className="carousel-card-separator">|</span> до 7 млн.</p>
                          </div>
                        </div>
                      </Col>
                    {/* </Fade> */}
                  </Row>
                </div>
                <div>
                <Row>
                      <Col xl={{ span: 12 }}>
                        <Card img={require('../header/img/carousel1.jpg')} 
                        active="1"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                        <Card img={require('../header/img/carousel2.jpg')} 
                        active="0"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                        <Card img={require('../header/img/carousel3.jpg')} 
                        active="0"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                      </Col>
                    <Col xl={{ span: 12 }}>
                      <div className="carousel-card-poster">
                        <img className="img1" src={require('../header/img/samarkand.jpg')} />
                        <span className="carousel-card-city">Самарканд</span>
                        <div className="carousel-card-bg">
                          <p className="fs20">Цена за ночь:</p>
                          <p className="fs16 pdtop10">от 60 тыс. <span className="carousel-card-separator">|</span> до 7 млн.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                <Row>
                      <Col xl={{ span: 12 }}>
                        <Card img={require('../header/img/carousel1.jpg')} 
                        active="1"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                        <Card img={require('../header/img/carousel2.jpg')} 
                        active="0"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                        <Card img={require('../header/img/carousel3.jpg')} 
                        active="0"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                      </Col>
                    <Col xl={{ span: 12 }}>
                      <div className="carousel-card-poster">
                        <img className="img1" src={require('../header/img/samarkand.jpg')} />
                        <span className="carousel-card-city">Самарканд</span>
                        <div className="carousel-card-bg">
                          <p className="fs20">Цена за ночь:</p>
                          <p className="fs16 pdtop10">от 60 тыс. <span className="carousel-card-separator">|</span> до 7 млн.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                <Row>
                    <Col xl={{ span: 12 }}>
                      <Card img={require('../header/img/bg.jpg')} 
                      active="1"
                      title="Отель"
                      count="62 варианта"
                      text1="• Стратегическое месторасположение"
                      text2="• Изысканные помещения"
                      text3="• Великолепная гастрономия" />
                      <Card img={require('../header/img/bg.jpg')} 
                      active="0"
                      title="Отель"
                      count="62 варианта"
                      text1="• Стратегическое месторасположение"
                      text2="• Изысканные помещения"
                      text3="• Великолепная гастрономия" />
                      <Card img={require('../header/img/bg.jpg')} 
                      active="0"
                      title="Отель"
                      count="62 варианта"
                      text1="• Стратегическое месторасположение"
                      text2="• Изысканные помещения"
                      text3="• Великолепная гастрономия" />
                    </Col>
                    <Col xl={{ span: 12 }}>
                      <div className="carousel-card-poster">
                        <img className="img1" src={require('../header/img/samarkand.jpg')} />
                        <span className="carousel-card-city">Самарканд</span>
                        <div className="carousel-card-bg">
                          <p className="fs20">Цена за ночь:</p>
                          <p className="fs16 pdtop10">от 60 тыс. <span className="carousel-card-separator">|</span> до 7 млн.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
            </Carousel>
            </Col>
        </Row>
      );
    }
}
export default CarouselSection;