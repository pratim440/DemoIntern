import React from "react";

function Landing() {
  const styles = {
    mainContainer: {
      width: "100vw",
      height: "56rem",
      backgroundColor: "lightgray",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    heading: {
      fontSize: "6rem",
      fontWeight: "400",
    },
    button: {
      height: "4.4rem",
      width: "20rem",
      backgroundColor: "#535c68",
      borderStyle: "none",
      color: "white",
    },
    buttonDiv: {
      width: "35%",
      display: "flex",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.heading}>Make your future, today</h1>
      <div style={styles.buttonDiv}>
        <button style={styles.button} type='button'>
          I WANT A JOB
        </button>
        <button style={styles.button} type='button'>
          I WANT TO HIRE
        </button>
      </div>
    </div>
  );
}

export default Landing;
