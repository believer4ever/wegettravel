import React, { Component } from 'react';
import { Row, Col, Input, Menu, Checkbox, Icon, Dropdown, Button, Carousel } from 'antd';
import { FiMapPin} from "react-icons/fi";
class Email extends Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <Row style={{  position: 'relative', background: '#484D5B', marginTop: '5em' , paddingBottom: '3em' }} className="email">
            <Col xl={{ offset: 3, span: 18 }}>
            <div className="text2">
                <span className="fs32 title">Любите путешествовать? <br />Подписывайтесь!</span><br />
                <p className="fs16 small-text">Наши подписчики первыми узнают о выгодных ценах и спецпредложениях.</p>
                <Row>
                <Col xl={{ span: 10 }} style={{ paddingRight: '20px' }}>
                    <Input className="email-input" placeholder="example@mail.uz" />
                </Col>
                <Col xl={{ span: 4 }}>
                    <Button type="primary" className="email-button">Подписаться</Button>
                </Col>
                </Row>
                <Row>
                    <Checkbox className="fs16 email-checkbox">
                        Я согласен с «Политикой по обработке персональных данных».
                    </Checkbox>
                </Row>
            </div>
            </Col>
        </Row>
      );
    }
}
export default Email;