import React from 'react';
import { Row, Col, Input, Menu, Button, Icon, Dropdown } from 'antd';
import './popular.css';
import { FiMapPin} from "react-icons/fi";
class Card extends React.Component{
    constructor(props) {
        super(props);
      }
    createTable = () => {
        let table = [];
    
        for (let i = 0; i < this.props.star; i++) {
          table.push(<Icon theme="filled" style={{ color: '#FDC602' }} type="star" />);
        }
        return table;
      };
      render() {
        return (
            <Row className="popular-card" style={{ marginTop: '22px', height: '500px' }}>
                <Row>
                    <Col>
                        <img className="popular_img" src={this.props.img} />
                    </Col>
                </Row>
                <Row>
                    <Col xl={{ span: 24 }}>
                        <div className="popular-hotel-info">
                            <div className="whitetext">
                                <b>{ this.props.price }</b> { this.props.currency }
                                <span style={{ float: 'right' }} className="popular-stars">
                                {this.createTable()}
                                </span>
                                <hr />
                            </div>
                            <div>
                                <p className="fs18 popular_hotel_name">{ this.props.name }</p>
                                <p><FiMapPin className="fs16 white popular-icon" /> <span className="fs12 white">{ this.props.address }</span> </p>
                            </div>
                            <div className="white fs12">
                                Рейтинг:  <b>{ this.props.rating }</b>
                                <span style={{ float: 'right', textDecoration: 'underline' }} >
                                    { this.props.reviews } отзыва
                                </span>
                            </div>
                            
                        </div>
                        <Button ghost className="popular-book-button">ЗАБРОНИРОВАТЬ</Button>
                    </Col>
                </Row>
                
            </Row>
        );
     }
}
export default Card;
