import React from "react";
import Carousel from "react-elastic-carousel";
import logo from "./../assets/logo.png";

function CarousalComponent({ title, buttonTitle, carousal }) {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <Carousel showArrows={true} itemsToShow={1} enableSwipe={false}>
        <img
          className='innerCarousalBox'
          src={"https://picsum.photos/id/1037/1000/600/"}
        />
        <img
          className='innerCarousalBox'
          src={"https://picsum.photos/id/1016/1000/600/"}
        />
        <img
          className='innerCarousalBox'
          src={"https://picsum.photos/id/1019/1000/600/"}
        />
        <img
          className='innerCarousalBox'
          src={"https://picsum.photos/id/1018/1000/600/"}
        />
        <img
          className='innerCarousalBox'
          src={"https://picsum.photos/id/10/1000/600/"}
        />
      </Carousel>
      <div
        className='landingDiv'
        style={carousal ? { top: "3420px", left: "170px" } : null}>
        <h1>{title}</h1>
        <button className='button' type='button'>
          {buttonTitle}
        </button>
      </div>
    </>
  );
}

export default CarousalComponent;
