import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  width: "100%",
  height: "500px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};
const DynamicBanner = ({ img1, img2 }) => {
  const onChange = (currentSlide) => {
  };
  return (
    <div className="relative">
      <Carousel afterChange={onChange} autoplay="true" autoplaySpeed={2000} draggable="true">
        <div>
          <h3 style={contentStyle}>
            <img src={img1} alt="img1" className="object-cover w-full h-full" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={img2} alt="img1" className="object-cover w-full h-full" />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};
export default DynamicBanner;
