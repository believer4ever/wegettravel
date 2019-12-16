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
                <p className="fs36" style={{ lineHeight: 1, marginBottom: 0.5 }}>Вам выбирать, где лучше жить...</p>
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
                  <Row>
                      <Col lg={{ span: 12 }}>
                        <Card img={require('../header/img/carousel1.jpg')} 
                        active="0"
                        title="Отель"
                        count="62 варианта"
                        text1="• Стратегическое месторасположение"
                        text2="• Изысканные помещения"
                        text3="• Великолепная гастрономия" />
                        <Card img={require('../header/img/carousel2.jpg')} 
                        active="0"
                        title="Хостел"
                        count="62 варианта"
                        text1="• Расположения"
                        text2="• Атмосфера"
                        text3="• Гарантированное развлечение" />
                        <Card img={require('../header/img/carousel3.jpg')} 
                        active="0"
                        title="Апартаменты"
                        count="62 варианта"
                        text1="• Офис и жилье одновременно"
                        text2="• Кухня"
                        text3="• Гарантированное развлечение" />
                      </Col>
                      <Col lg={{ span: 12 }}>
                      <Carousel className="mobile-none" speed="500" effect="fade">
                      <div className="carousel-card-poster">
                          <img className="img1" src={require('../header/img/samarkand.jpg')} />
                          <span className="carousel-card-city">Самарканд</span>
                          <div className="carousel-card-bg">
                            <p className="fs20">Цена за ночь:</p>
                            <p className="fs16 pdtop10">от 60 тыс. <span className="carousel-card-separator">|</span> до 7 млн.</p>
                          </div>
                        </div>
                        <div className="carousel-card-poster">
                          <img className="img1" src={require('../header/img/tashkent.jpg')} />
                          <span className="carousel-card-city">Ташкент</span>
                          <div className="carousel-card-bg">
                            <p className="fs20">Цена за ночь:</p>
                            <p className="fs16 pdtop10">от 120 тыс. <span className="carousel-card-separator">|</span> до 18 млн.</p>
                          </div>
                        </div>
                        <div className="carousel-card-poster">
                          <img className="img1" src={require('../header/img/bukh.jpg')} />
                          <span className="carousel-card-city">Бухара</span>
                          <div className="carousel-card-bg">
                            <p className="fs20">Цена за ночь:</p>
                            <p className="fs16 pdtop10">от 40 тыс. <span className="carousel-card-separator">|</span> до 7 млн.</p>
                          </div>
                        </div>
                        <div className="carousel-card-poster">
                          <img className="img1" src={require('../header/img/khiva.jpg')} />
                          <span className="carousel-card-city">Хива</span>
                          <div className="carousel-card-bg">
                            <p className="fs20">Цена за ночь:</p>
                            <p className="fs16 pdtop10">от 50 тыс. <span className="carousel-card-separator">|</span> до 5 млн.</p>
                          </div>
                        </div>
                      </Carousel>
                      </Col>
                  </Row>  
            </Col>
        </Row>
      );
    }
}
export default CarouselSection;