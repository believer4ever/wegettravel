import React, { Component } from 'react';
import { Row, Col, Input, Menu, Checkbox, Icon, Dropdown, Button, Carousel } from 'antd';
import { FiMapPin} from "react-icons/fi";
class Footer extends Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <Row style={{  position: 'relative', paddingBottom: '3em' }} className="footer">
            <Col className="footer-block-main" xl={{ offset: 3, span: 21 }}>
                <Row>
                    <Col xl={{ span: 6 }}>
                        <div className="footer-right-panel">
                            <span className="footer-logo">Weget</span><br /><br />
                            <Button ghost className="footer-right-button" onClick={() => window.location.href="http://join.hotelier.uz"}>Зарегистрировать свой объект</Button>
                            <br /><br />
                            <img className="footer-social" src={require('../header/img/fb.svg')} />
                            <img className="footer-social" src={require('../header/img/inst.svg')} />
                            <img className="footer-social" src={require('../header/img/youtube.svg')} />
                        </div>
                    </Col>
                    <Col xl={{ span: 9 }}>
                        <div className="footer-center-title">О проекте</div>
                        <div className="footer-center-subtitle">Почему нужно выбрать нас?</div>
                        <div className="footer-center-text">
                            Тысячи отелей, гостиниц,  апартаментов уже выбрали нас. 
                            Десятки тысяч посетителей уже сэкономили свое время на поиске жилья для 
                            путешествий и работы. Сотни людей оставили свои отзывы. Выбирая нас - вы 
                            выбираете актуальнейшую информацию в гостиничной сфере Узбекистана.
                        </div>
                    </Col>
                    <Col xl={{ span: 9 }}>
                        <Row>
                            <Col xl={{span:8}} className="border-right">
                                <a className="footer-link-title">Жилье</a><br />
                                <a className="footer-link">Страны</a><br />
                                <a className="footer-link">Районы</a><br />
                                <a className="footer-link">Аэропорты</a><br />
                                <a className="footer-link">Отели</a><br />
                                <a className="footer-link">Ориентиры</a>
                            </Col>
                            <Col className="footer-link-block" xl={{span:12}} style={{ paddingLeft: '20px' }}>
                                <a className="footer-link-title">Компания</a><br />
                                <a className="footer-link">О нас</a><br />
                                <a className="footer-link">Служба поддержки</a><br />
                                <a className="footer-link">Для инвесторов</a><br />
                                <a className="footer-link">Правила и условия</a><br />
                                <a className="footer-link">Положение о конфиденциальности</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="text1 copyright">
                    <span>© 2019 — 2022</span>
                    <a style={{ marginLeft: '40px', color: 'white' }}>Privacy — Terms</a>
                </div>
            </Col>
        </Row>
      );
    }
}
export default Footer;