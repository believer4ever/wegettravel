import React, { Component } from 'react';
import { Row, Col, Input, Menu, Icon, Dropdown, Button, Carousel } from 'antd';
import { FiMapPin} from "react-icons/fi";
class Tours extends Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <Row style={{  position: 'relative' }} className="tours">
            <Col xl={{ offset: 3, span: 18 }}>
            <div className="text1">
                <p className="fs36" style={{ lineHeight: 0 }}>Экскурсии и туры</p>
                <p className="fs24 gray">Не знаете чем заняться? Выборка эксклюзивнх экскурсий и эвентов Узбекистана.</p>
            </div>
            <Row>
                <Col  xl={{ span: 10 }}>
                    <div style={{ position: 'relative', paddingRight: '5px' }} className="tours-img-block">
                        <div class="img-hover-zoom">
                            <img src={require('../header/img/tour1.jpg')} className="tours-img imgzoom" />
                            <div className="tours-desc">
                                На верблюдах через Кызыл-Кумы 
                                <p><FiMapPin className="fs16 white popular-icon" /> <span className="fs12 white">Ташкент, Мирзо-Улугбекский район</span> </p>
                            </div>
                            <div className="tour-timer">
                                <img src={require('../header/img/time.svg')} />
                                <span className="tour-time">3 дня</span>
                            </div>
                            <div className="tour-overlay"></div>
                        </div>
                    </div>
                </Col>
                <Col  xl={{ span: 7 }}>
                    <div style={{ position: 'relative', paddingRight: '5px', paddingLeft: '5px', paddingBottom: '5px' }}>
                        <div class="img-hover-zoom">
                            <img src={require('../header/img/tour2.png')} className="tours-img1 imgzoom" />
                            <div className="tours-desc1">
                                Горный туризм
                                <p><FiMapPin className="fs16 white popular-icon" /> <span className="fs12 white">Ташкент, Мирзо-Улугбекский район</span> </p>
                            </div>
                            <div className="tour-timer1">
                                <img src={require('../header/img/time.svg')} />
                                <span className="tour-time1">3 дня</span>
                            </div>
                            <div className="tour-overlay"></div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px' }}>
                        <div class="img-hover-zoom">
                            <img src={require('../header/img/tour3.png')} className="tours-img1 imgzoom" />
                            <div className="tours-desc1">
                                Горный туризм
                                <p><FiMapPin className="fs16 white popular-icon" /> <span className="fs12 white">Ташкент, Мирзо-Улугбекский район</span> </p>
                            </div>
                            <div className="tour-timer1">
                                <img src={require('../header/img/time.svg')} />
                                <span className="tour-time1">3 дня</span>
                            </div>
                            <div className="tour-overlay"></div>
                        </div>
                    </div>
                </Col>
                <Col  xl={{ span: 7 }}>
                    <div style={{ position: 'relative', paddingRight: '5px', paddingLeft: '5px', paddingBottom: '5px' }}>
                        <div class="img-hover-zoom">
                            <img src={require('../header/img/tour4.png')} className="tours-img2 imgzoom" />
                            <div className="tours-desc1">
                                Горный туризм
                                <p><FiMapPin className="fs16 white popular-icon" /> <span className="fs12 white">Ташкент, Мирзо-Улугбекский район</span> </p>
                            </div>
                            <div className="tour-overlay"></div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', paddingRight: '5px', paddingLeft: '5px', paddingTop: '5px' }}>
                        <div class="img-hover-zoom">
                            <img src={require('../header/img/tour5.png')} className="tours-img3 imgzoom" />
                            <div className="tours-desc1">
                                Горный туризм
                                <p><FiMapPin className="fs16 white popular-icon" /> <span className="fs12 white">Ташкент, Мирзо-Улугбекский район</span> </p>
                            </div>
                            <div className="tour-overlay"></div>
                        </div>
                    </div>
                </Col>
            </Row>
            </Col>
        </Row>
      );
    }
}
export default Tours;