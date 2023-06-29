import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";

import Accordion from "react-bootstrap/Accordion";
const Home = () => {
  const [seatData, setSeatData] = useState([
    {
      id: "1",
      name: "Seat_BackLeather_New",
      img: "Seat_BackLeather_New.png",
      tooltip: "BLACK LEATHER",
    },
    {
      id: "2",
      name: "Seat_FrontLeather_New",
      img: "Seat_FrontLeather_New.png",
      tooltip: "FRONT LEATHER",
    },
    {
      id: "3",
      name: "Seat_FullCloth_New",
      img: "Seat_FullCloth_New.png",
      tooltip: "FULL CLOTH",
    },
    {
      id: "4",
      name: "Seat_FullLeather_New",
      img: "Seat_FullLeather_New.png",
      tooltip: "FULL LEATHER",
    },
  ]);
  const [legData, setLegData] = useState([
    { id: "1", name: "Legs_Thin", img: "Legs_Thin.png", tooltip: "LEGS THIN" },
    {
      id: "2",
      name: "Legs_Thick_2",
      img: "Legs_Thick_2.png",
      tooltip: "LEGS THICK",
    },
  ]);
  const [colorData, setColorData] = useState([
    { id: "1", name: "Legs_Thin", color: "#000", tooltip: "BLACK" },
    { id: "2", name: "Legs_Thin", color: "#fff", tooltip: "WHITE" },
    { id: "3", name: "Legs_Thick_2", color: "#aaa9ad", tooltip: "FINE SILVER" },
    { id: "4", name: "Legs_Thick_2", color: "#43464b", tooltip: "STEEL BRUSH" },
    // {id: '5', name: 'Legs_Thick_2', bg: 'wood_light.jpg', tooltip: 'LIGHT WOOD'},
    {
      id: "6",
      name: "Legs_Thick_2",
      bg: "wood_dark.jpg",
      tooltip: "DARK WOOD",
    },
  ]);
  const [selectedSeat, setSelectedSeat] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();

  return (
    <div className="mt-5 row">
      <div className="col-md-7 border border-white border-right-0 d-md-grid align-item-center justify-content-center">
        {selectedSeat && <img src={require('../assets/'+seatData.find(x => x.id === selectedSeat).img)} style={{position: 'relative'}} /> }
        {selectedSeat && selectedSize && <img src={require('../assets/'+legData.find(x => x.id === selectedSize).img)} style={{marginTop: '-390px'}}/> }

      </div>

      <div className="col-md-5 ml-6 p-5">
        <div className="m-4"><h2 className="text-uppercase title mt-3">Customize your chair</h2></div>
        <div className="px-4">
          <Accordion defaultActiveKey="" className="accordion-0 mt-4 shadow">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="text-uppercase acc-head">
                Seating Selector
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#f8f8f8" }}>
                <Row>
                  {seatData?.map((s) => {
                    return (
                      <Col
                        md={3}
                        sm={2}
                        className={
                          s.id === selectedSeat
                            ? clsx("selected", "seat")
                            : "seat"
                        }
                        onClick={() => {
                          setSelectedSeat(s.id);
                        }}
                      >
                        <img
                          src={require("../assets/" + s.img)}
                          alt={s.name}
                          height={"60px"}
                          title={s.tooltip}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="" className="accordion-1 mt-4 shadow">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="text-uppercase acc-head">
                Legs Selector
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#f8f8f8" }}>
                <Row>
                  {legData?.map((s) => {
                    return (
                      <Col
                        className={
                          s.id === selectedSize
                            ? clsx("selected", "seat")
                            : "seat"
                        }
                        onClick={() => {
                          setSelectedSize(s.id);
                        }}
                      >
                        <img
                          src={require("../assets/" + s.img)}
                          alt={s.name}
                          height={"60px"}
                          title={s.tooltip}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="" className="accordion-2 mt-4 shadow">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="text-uppercase acc-head">
                Color Selector
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#f8f8f8" }}>
                <Row>
                  {colorData?.map((s) => {
                    return (
                      <Col
                        md={3}
                        sm={2}
                        className={
                          s.id === selectedColor
                            ? clsx("selected", "seat")
                            : "seat"
                        }
                        onClick={() => {
                          setSelectedColor(s.id);
                        }}
                        style={{ backgroundColor: s.color }}
                      >
                        {s.bg && (
                          <img
                            src={require("../assets/" + s.bg)}
                            alt={s.name}
                            height={"60px"}
                            title={s.tooltip}
                          />
                        )}
                      </Col>
                    );
                  })}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="d-flex justify-content-center">
        <button
            // src={require("../assets/Add to cart.png")}
            // style={{ cursor: "pointer" }}
            className="mt-5 add-to-cart shadow"
          >Add To cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
