import React from "react";
import "./../styles/Footer.css";
function Footer() {
  return (
    <div className='footerContainer'>
      <div className='section1'>
        <div className='innerSection1'>
          <h2>Sign up and stay updated on your career</h2>
          <input placeholder='Email' />
        </div>
        <div className='innerSection1'>
          <h2>Stay connected on social</h2>
          <div>
            <div className='icons'></div>
            <div className='icons'></div>
            <div className='icons'></div>
            <div className='icons'></div>
            <div className='icons'></div>
          </div>
        </div>
      </div>
      <div className='section2'>
        <div className='innerSection2'>
          <h5>POPULAR COURSES</h5>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className='innerSection2'>
          <h5>TOP CAREERS</h5>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className='innerSection2'>
          <h5>TOP COMPANIES</h5>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className='innerSection2'>
          <h5>DEVELUP</h5>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className='section3'>
        <h5>CONTACT US</h5>
        <p>
          21/23 MG Road,
          <br />
          Sampangi Ramnagar,
          <br />
          Bangalore, Karnataka
          <br />
          560001
        </p>

        <p>Mobile: +91 98000 98000</p>
        <p>Whats App: +91 98000 98000</p>
        <p>Email: hello@develup.in</p>
        <p>
          © Develup education pvt ltd 2021
          <br />
          CIN: L01631KA2010PTC096843
        </p>
      </div>
    </div>
  );
}

export default Footer;
