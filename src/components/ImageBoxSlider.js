import React from "react";
import Carousel from "react-elastic-carousel";
import dummyLogo from "./../assets/dummylogo.jpeg";

function ImageBoxSlider() {
  const styles = {
    boxContainer: {
      width: "25rem",
      height: "12rem",
      backgroundColor: "grey",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.5rem",
      margin: "1rem",
    },
  };
  return (
    <div style={{ width: "90vw", padding: "2rem 0" }}>
      <Carousel itemsToShow={6} showArrows={false}>
        <img style={{ width: "16rem" }} src={dummyLogo} alt='dummyLogo' />
        <img style={{ width: "16rem" }} src={dummyLogo} alt='dummyLogo' />
        <img style={{ width: "16rem" }} src={dummyLogo} alt='dummyLogo' />
        <img style={{ width: "16rem" }} src={dummyLogo} alt='dummyLogo' />
        <img style={{ width: "16rem" }} src={dummyLogo} alt='dummyLogo' />
        <img style={{ width: "16rem" }} src={dummyLogo} alt='dummyLogo' />
      </Carousel>
    </div>
  );
}

export default ImageBoxSlider;
