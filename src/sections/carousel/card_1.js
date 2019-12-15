import React from 'react';
import { Row, Col, Input, Menu, Icon, Dropdown, Carousel } from 'antd';
import './carousel.css';
function Card(props) {
  return (
    <Row className={ props.active == 1 ? "active-carousel-card" : "" } style={{ marginTop: '22px', cursor: 'pointer' }}>
        <Col lg={{ span: 9 }}>
            <img className="img" src={props.img} />>
        </Col>
        <Col lg={{ span: 15 }}>
            <div className="carousel-card-list">
            <p>
                <span className="carousel-card-title">{ props.title }</span>
                <span className="carousel-card-count">{ props.count }</span>
            </p>
                 <br />
                <p className="lineheight2">
                    { props.text1 } <br /> { props.text2 } <br /> { props.text3 }
                </p>
                
            </div>
        </Col>
    </Row>
  );
}

export default Card;
