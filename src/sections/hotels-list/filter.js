import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Menu,
  Checkbox,
  Slider,
  Icon,
  Button,
  Dropdown,
  Carousel,
  Select
} from "antd";
const InputGroup = Input.Group;
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(value) {
  console.log("onChange: ", value);
}

function onAfterChange(value) {
  console.log("onAfterChange: ", value);
}
class Filter extends Component {
  render() {
    return (
      <div className="filter-card">
        <p className="city_name">Самарканд, Узбекистан</p>
        <div className="prelative">
          <img className="filter-card-map" src={require("../header/img/map.png")} />
          <Button type="primary" className="open-map">Показать карту</Button>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Сортировка</p>
          <div className="padding-top-10px">
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Название отеля</p>
          <div className="padding-top-10px">
            <Input
              placeholder="Raddison Blu"
              prefix={
                <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Цена за ночь в UZS</p>
          <div className="padding-top-10px">
            <InputGroup compact>
              <Input style={{ width: "50%" }} defaultValue="100000" />
              <Input style={{ width: "50%" }} defaultValue="700000" />
            </InputGroup>
            <Slider
              range
              step={10}
              defaultValue={[0, 100]}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Количество звёзд</p>
          <div>
            <Checkbox>
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
            </Checkbox>
            <br />
            <Checkbox>
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
            </Checkbox>
            <br />
            <Checkbox>
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
            </Checkbox>
            <br />
            <Checkbox>
              <Icon type="star" theme="filled" />
              <Icon type="star" theme="filled" />
            </Checkbox>
            <br />
            <Checkbox>
              <Icon type="star" theme="filled" />
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Без звёзд</span>
            </Checkbox>
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Расположение от центра города</p>
          <div className="padding-top-10px">
            <Row>
              <Col xl={{ span: 14 }}>
                <Slider defaultValue={30} />
              </Col>
              <Col xl={{ span: 10 }}>
                <Input defaultValue="30 км" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Ближайшее метро</p>
          <div className="padding-top-10px">
            <Input placeholder="Станция метро" />
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Количество звёзд</p>
          <div className="padding-top-10px">
            <Checkbox>
              <span className="checkbox-text">Супер: 9+</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Отлично: 8+</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Очень хорошо: 7+</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Хорошо: 6+</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Неплохо: 5+</span>
            </Checkbox>
            <br />
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Питание</p>
          <div className="padding-top-10px">
            <Checkbox>
              <span className="checkbox-text">Питание не включено</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Завтрак включён</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Завтрак и ужин включены</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Завтрак, обед и ужин включены</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Всё включено</span>
            </Checkbox>
            <br />
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Оплата и бронирование</p>
          <div className="padding-top-10px">
            <Checkbox>
              <span className="checkbox-text">Для бронирования не нужна карта <Icon type="question-circle" /></span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Есть бесплатная отмена <Icon type="question-circle" /></span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Оплата сейчас <Icon type="question-circle" /></span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Оплата на месте <Icon type="question-circle" /></span>
            </Checkbox>
            <br />
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">В отеле</p>
          <div className="padding-top-10px">
            <Checkbox>
              <span className="checkbox-text">Бесплатный интернет</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Трансфер</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Парковка</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Бассейн</span>
            </Checkbox>
            <br />
          </div>
        </div>
        <div className="filter-subcard mrtop1em">
          <p className="filter-subcard-title">Достопримечательности</p>
          <div className="padding-top-10px">
            <Checkbox>
              <span className="checkbox-text">Регистан</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Гур-Эмир</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Шахи Зинда</span>
            </Checkbox>
            <br />
            <Checkbox>
              <span className="checkbox-text">Биби Ханым</span>
            </Checkbox>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
