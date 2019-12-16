import React, { Component } from 'react';
import { Row, Col, Input, Menu, Icon, Button, Dropdown, AutoComplete } from 'antd';
import './header.css';
import { FiMapPin, FiCalendar, FiUser } from "react-icons/fi";
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { formatDate, parseDate } from 'react-day-picker/moment';

const { Option, OptGroup } = AutoComplete;
  
  const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const WEEKDAYS_LONG = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  const WEEKDAYS_SHORT = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'Ташкент',
        count: 80,
      },
      {
        title: 'Самарканд',
        count: 100,
      },
    ],
  },
];
  const FORMAT = 'DD.MM.YYYY';
  const options = dataSource
  .map(group => (
    <OptGroup>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count">{opt.count} вариантов</span>
        </Option>
      ))}
    </OptGroup>
  ));
class SearchForm extends Component {
    constructor(props){  
        super(props);  
        this.state = {  
            focus: 0 ,
            val: '',
            adult: 2,
            children: 0,
            baby: 0,
            room: 1,
            from: undefined,
            to: undefined,
            visible: false,
        };  
        this.onFocus = this.onFocus.bind(this);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
    } 
      onChange = value => {
        this.setState({ val: value });
        
      };
      handleVisibleChange = flag => {
        this.setState({ visible: flag });
      };
    onFocus(){
        this.setState({  
            focus: 1  
        });
    };
    onSelect = value => {
        this.setState({ focus: 1, val: value  });
    };
    
    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
          return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
          this.to.getDayPicker().showMonth(from);
        }
    }
    
    handleFromChange(from) {
        this.setState({ from });
    }
    
    handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
    }
    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        const menu = (
            <Menu onClick={this.handleMenuClick} className="light">
              <Menu.Item key="1">
              <span className="spanpadding">
                 Взрослых
              </span>
              <div className="certain-search-item-count">
                <Button icon="minus" className="bluebutton" size="large" 
                    onClick={() => {
                      if(this.state.adult >1){
                        this.setState({  
                            adult: this.state.adult - 1
                        });
                      }
                    }} />
                  <Button type="link">
                    { this.state.adult }
                  </Button>
                <Button icon="plus" className="bluebutton" size="large"
                  onClick={() => {
                          this.setState({  
                              adult: this.state.adult + 1
                          });
                      }} />
              </div>
              </Menu.Item>
              <Menu.Item key="2">
                <span className="spanpadding">
                  Дети(2-12 лет)
                </span>
                <div className="certain-search-item-count">
                  <Button icon="minus" className="bluebutton" size="large" 
                      onClick={() => {
                        if(this.state.children >0){
                          this.setState({  
                            children: this.state.children - 1
                          });
                        }
                      }} />
                    <Button type="link">
                      { this.state.children }
                    </Button>
                  <Button icon="plus" className="bluebutton" size="large"
                    onClick={() => {
                            this.setState({  
                              children: this.state.children + 1
                            });
                        }} />
                </div>
              </Menu.Item>
              <Menu.Item key="3">
                <span className="spanpadding">
                  Младенцы
                </span>
                <div className="certain-search-item-count">
                  <Button icon="minus" className="bluebutton" size="large" 
                      onClick={() => {
                        if(this.state.baby >0){
                          this.setState({  
                            baby: this.state.baby - 1
                          });
                        }
                      }} />
                    <Button type="link">
                      { this.state.baby }
                    </Button>
                  <Button icon="plus" className="bluebutton" size="large"
                    onClick={() => {
                            this.setState({  
                              baby: this.state.baby + 1
                            });
                        }} />
                </div>
              </Menu.Item>
              <Menu.Item key="4">
                <span className="spanpadding">
                  Номера
                </span>
                <div className="certain-search-item-count">
                  <Button icon="minus" className="bluebutton" size="large" 
                      onClick={() => {
                        if(this.state.room >1){
                          this.setState({  
                            room: this.state.room - 1
                          });
                        }
                      }} />
                    <Button type="link">
                      { this.state.room }
                    </Button>
                  <Button icon="plus" className="bluebutton" size="large"
                    onClick={() => {
                            this.setState({  
                              room: this.state.room + 1
                            });
                        }} />
                </div>
              </Menu.Item>
            </Menu>
          );
      return (
        <Col xl={{ offset: 2, span: 19 }} lg={{ offset: 2, span: 20 }} md={{ offset: 2, span: 20 }} sm={{ offset: 2, span: 20 }} xs={{ offset: 1, span: 22 }} className="bgwhite">
        <Row>
            <Col xl={{ span: 6 }} className="mobile-search-form" style={{ borderRight: '1px solid #D2D2D7', paddingLeft: '10px' }}>
            <OutsideClickHandler
                onOutsideClick={() => {
                    if(this.state.val !== ''){
                        this.setState({  
                            focus: 1  
                        });
                    }else{
                        this.setState({  
                            focus: 0  
                        });
                    }
                }}
                >
                <AutoComplete
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: '300px' }}
                    size="large"
                    onFocus={this.onFocus}
                    onSelect={this.onSelect}
                    style={{ width: '300px' }}
                    dataSource={options}
                    onChange={this.onChange}
                    placeholder={<div className={[this.state.focus == 0 ? "hotels_placeholder" : "hotels_placeholder_floated"]}><FiMapPin /> <span className="input_placeholder">В какой город едем? </span></div>}
                    optionLabelProp="value"
                    className={[this.state.focus == 1 ? 'ant-select-focused': '']}
                />
            </OutsideClickHandler>
            </Col>
            
            <Col xl={{ span: 8 }} className="mobile-search-form" style={{ position: 'relative', borderRight: '1px solid #D2D2D7', paddingLeft: '10px' }}>
                <div className={[this.state.from !== undefined || this.state.to !== undefined ? "dates" : "dates1" ]} style={{ width: '100%', fontSize: '16px' }} 
                onClick={() => {
                    this.from.getInput().focus();
                        this.setState({  
                            from: "",
                            to: ""
                        });
                    }}>
                    <span className="primary date1">
                        <FiCalendar className="primary translatey" /> <span>Дата вьезда</span>
                    </span>
                    <span className="separator">|</span>
                    <span className="primary date1">
                         <span>Дата выезда</span>
                    </span>
                </div>
                <OutsideClickHandler
                onOutsideClick={() => {
                    if(this.state.from === "" && this.state.to === ""){
                        this.setState({  
                            from: undefined,
                            to: undefined
                        });
                    }
                }}
                >
                <div className="InputFromTo">
                    <DayPickerInput
                    value={ from}
                    ref={fr => (this.from = fr)}
                    placeholder=""
                    format={FORMAT}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={{
                        selectedDays: [from, { from, to }],
                        disabledDays: { after: to },
                        months: MONTHS,
                        weekdaysLong: WEEKDAYS_LONG,
                        weekdaysShort: WEEKDAYS_SHORT,
                        toMonth: to,
                        modifiers,
                        numberOfMonths: 2,
                        onDayClick: () => this.to.getInput().focus()
                    }}
                    onDayChange={this.handleFromChange}
                    />
                    <span className="separator" style={{ paddingLeft: '5px' }}>|</span>
                    <span className="InputFromTo-to">
                    <DayPickerInput
                        ref={el => (this.to = el)}
                        value={to}
                        placeholder=""
                        format={FORMAT}
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                        months: MONTHS,
                        weekdaysLong: WEEKDAYS_LONG,
                        weekdaysShort: WEEKDAYS_SHORT,
                        selectedDays: [from, { from, to }],
                        disabledDays: { before: from },
                        modifiers,
                        month: from,
                        fromMonth: from,
                        numberOfMonths: 2,
                        }}
                        onDayChange={this.handleToChange}
                    />
                    </span>
                </div>
                </OutsideClickHandler>
            </Col>
            <Col xl={{ span: 5 }} className="mobile-search-form" style={{ position: 'relative', paddingLeft: '10px' }}>
            <Dropdown
                overlay={menu}
                className="willgo"
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
                trigger={['click']}
            >
                <div>
                  <div className="capacitybutton primary dates"><FiUser /> Кто поедет?</div>
                  <div className="capacityplaceholder">{ this.state.adult } взрослых, { this.state.room } { this.state.room  > 1 ? 'номерa' : 'номер' }</div>
                </div>
            </Dropdown>
            </Col>
            <Col xl={{ span: 5 }}>
                <Button type="primary" className="searchprice">Найти цены</Button>
            </Col>
        </Row>
        </Col>
        
      );
    }
}
  
export default SearchForm;