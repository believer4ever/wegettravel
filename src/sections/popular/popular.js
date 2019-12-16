import React, { Component } from 'react';
import { Row, Col, Input, Menu, Icon, Dropdown, Button, Carousel } from 'antd';
import './popular.css';
import Card from './card'
class Popular extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
      }
      next() {
        this.carousel.next();
      }
      previous() {
        this.carousel.prev();
      }
    render() {
      return (
        <Row style={{ marginTop: '5em', position: 'relative' }} className="popular">
            <Col xl={{ offset: 3, span: 18 }}>
            <div className="text1">
                <p className="fs36" style={{ lineHeight: 1, marginBottom: 0.5 }}>Популярные отели Узбекистана</p>
                <p className="fs24 gray">Топовые отели Узбекистана, отобранные по отзывам их гостей</p>
            </div>
            <Button shape="circle" className="arrowbuttons prev" onClick={this.previous} icon="left" size="large" />
            <Button shape="circle" className="arrowbuttons next" onClick={this.next} icon="right" size="large"  />
            <Carousel ref={node => (this.carousel = node)} speed="1500">
            <div>
                <Row>
                    <Col xl={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }}  className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                </Row>
            </div>
            <div>
            <Row>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                    <Col xl={{ span: 6 }} className="popular-padding">
                        <Card active="1" star="5" price="450,000+" 
                        currency="UZS" 
                        img={require('../header/img/popular.jpg')}
                        address="Ташкент, Мирзо-Улугбекский район"
                        rating="8/10"
                        reviews="204"
                        name="International Hotel Tashkent"  />
                    </Col>
                </Row>
            </div>
            </Carousel>
            </Col>
        </Row>
      );
    }
}
export default Popular;