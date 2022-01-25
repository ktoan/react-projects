import React, { useState } from "react";
import styled from "styled-components";
import "./slider.css";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { sliderItems } from "../../data";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.index * -100}vw);
`;

const Slider = () => {
  const [index, setIndex] = useState(2);
  console.log(sliderItems.length);
  const handleSlider = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : sliderItems.length - 1);
    } else {
      setIndex(index == sliderItems.length - 1 ? 0 : index + 1);
    }
  };
  return (
    <div className="slider">
      <Wrapper index={index}>
        {sliderItems.map((item) => (
          <div
            style={{ background: `#${item.bg}` }}
            key={item.id}
            className="sliderSingle"
          >
            <div className="imgContainer">
              <img src={item.img} alt={item.title} className="imgSlider" />
            </div>
            <div className="infoContainer">
              <div className="info">
                <h1 className="infoTitle">{item.title}</h1>
                <p className="infoDesc">{item.desc}</p>
                <button className="infoBtn">Shop now</button>
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
      <div
        className="arrowContainer arrowLeft"
        onClick={() => handleSlider("left")}
      >
        <IoMdArrowDropleft />
      </div>
      <div
        className="arrowContainer arrowRight"
        onClick={() => handleSlider("right")}
      >
        <IoMdArrowDropright />
      </div>
    </div>
  );
};

export default Slider;
