import React from "react";
import logo from "./../assets/logo.png";

function Navbar() {
  const styles = {
    navbar: {
      width: "100vw",
      height: "7rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 9rem",
      position: "fixed",
      backgroundColor: "#f2f2f2",
      zIndex: 5,
    },
    inputBox: {
      width: "45rem",
      height: "4rem",
      border: "2px solid black",
      borderRadius: "10rem",
      padding: "0 2rem",
    },
  };
  return (
    <div classname='navbar' style={styles.navbar}>
      <img src={logo} style={{ width: "15rem" }} alt='logo' />
      <input style={styles.inputBox} placeholder='Search for courses . . .' />
    </div>
  );
}

export default Navbar;
