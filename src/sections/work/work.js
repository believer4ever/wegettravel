import React, { Component } from 'react';
import { Row, Col, Input, Menu, Checkbox, Icon, Dropdown, Button, Carousel } from 'antd';
import { FiMapPin} from "react-icons/fi";
class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
          work: 1,
        };
      }
    render() {
      return (
        <Row style={{  position: 'relative', paddingBottom: '3em' }} className="email">
            <Col xl={{ offset: 3, span: 18 }}>
                <div className="text1">
                    <p className="fs36" style={{ lineHeight: 0 }}>Как работает WeGet?</p>
                    <p className="fs24 gray">4 простых шага</p>
                    <Row>
                      <Col xs={{ offset: 12, span: 2 }} xs={{ offset: 6, span: 8 }}>
                      <div className="work-line-p">
                        <img src={require('../header/img/line.svg')} className="work-line-img" />
                        <div className="work-line">
                          <Button type="primary" onClick={() => this.setState({ work: 1})} className={[this.state.work === 1 ? 'work-dot active-dot' : 'work-dot' ]} shape="circle">1</Button>
                          <Button type="primary" onClick={() => this.setState({ work: 2})} className={[this.state.work === 2 ? 'work-dot active-dot' : 'work-dot' ]} shape="circle">2</Button>
                          <Button type="primary" onClick={() => this.setState({ work: 3})} className={[this.state.work === 3 ? 'work-dot active-dot' : 'work-dot' ]} shape="circle">3</Button>
                          <Button type="primary" onClick={() => this.setState({ work: 4})} className={[this.state.work === 4 ? 'work-dot active-dot' : 'work-dot' ]} shape="circle">4</Button>
                        </div>
                      </div>
                      </Col>
                    </Row>
                    
                    <Row style={{ marginTop: '7em' }}>
                      <Col xs={{ offset: 2, span: 10 }}>
                        <img src={require('../header/img/illustration.png')} style={{ width: '90%' }} />
                      </Col>
                      <Col xs={{ span: 10 }} style={{ marginTop: '1em' }}>
                      {(() => {
                        switch(this.state.work) {
                          case 1:
                            return <div>
                            <p className="fs32 gray" style={{ textAlign: 'left' }}>Заполняем форму 1</p>
                            <p className="fs24 gray" style={{ textAlign: 'left' }}>
                              Введите дату въезда и выезда в отель, 
                              сколько человек с вами едет, сколько детей, не забудьте 
                              про отметку о резидентстве в Республике Узбекистан или об 
                              его отсутствии.
                            </p>
                            </div>;
                          case 2:
                            return <div>
                            <p className="fs32 gray" style={{ textAlign: 'left' }}>Заполняем форму 2</p>
                            <p className="fs24 gray" style={{ textAlign: 'left' }}>
                              Введите дату въезда и выезда в отель, 
                              сколько человек с вами едет, сколько детей, не забудьте 
                              про отметку о резидентстве в Республике Узбекистан или об 
                              его отсутствии.
                            </p>
                            </div>;
                          case 3:
                            return <div>
                            <p className="fs32 gray" style={{ textAlign: 'left' }}>Заполняем форму 3</p>
                            <p className="fs24 gray" style={{ textAlign: 'left' }}>
                              Введите дату въезда и выезда в отель, 
                              сколько человек с вами едет, сколько детей, не забудьте 
                              про отметку о резидентстве в Республике Узбекистан или об 
                              его отсутствии.
                            </p>
                            </div>;
                          case 4:
                            return <div>
                            <p className="fs32 gray" style={{ textAlign: 'left' }}>Заполняем форму 4</p>
                            <p className="fs24 gray" style={{ textAlign: 'left' }}>
                              Введите дату въезда и выезда в отель, 
                              сколько человек с вами едет, сколько детей, не забудьте 
                              про отметку о резидентстве в Республике Узбекистан или об 
                              его отсутствии.
                            </p>
                            </div>;
                          default:
                            return null;
                        }
                      })()}
                        
                      </Col>
                    </Row>
                    
                </div>
                
            </Col>
        </Row>
      );
    }
}
export default Work;