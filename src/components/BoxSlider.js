import React from "react";
import Carousel from "react-elastic-carousel";

function BoxSlider() {
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
    mainText: {
      color: "white",
      fontSize: "4rem",
      fontWeight: "600",
    },
    subText: {
      color: "white",
      fontSize: "1.5rem",
      textAlign: "center",
    },
  };
  const dummyData = [
    {
      value: "28739",
      description: "Number of courses offered",
    },
    {
      value: "158",
      description: "Number of training sessions conducted",
    },
    {
      value: "185",
      description: "Number of jobs available",
    },
    {
      value: "158",
      description: "Number of career support",
    },
    {
      value: "2.5L",
      description: "Number of candidates enrolled till date",
    },
  ];
  return (
    <div style={{ width: "90vw", padding: "2rem 0" }}>
      <Carousel itemsToShow={5} showArrows={false}>
        {dummyData?.map((item, index) => {
          return (
            <div key={index} style={styles.boxContainer}>
              <h1 style={styles.mainText}>{item.value}</h1>
              <p style={styles.subText}>{item.description}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default BoxSlider;
