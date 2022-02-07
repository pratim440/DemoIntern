import React from "react";

function ImageTitleBox({ title }) {
  return (
    <div className={"imageTitleBoxConatiner"}>
      <h2>{title}</h2>
      <div className='boxDivOuter'>
        <div className='boxDiv'>
          <div className='imageBox'></div>
          <div className='titleDiv'>
            <h5>The Mechatronics Revolution: Fundamentals and Core Concepts</h5>
          </div>
        </div>
        <div className='boxDiv'>
          <div className='imageBox'></div>
          <div className='titleDiv'>
            <h5>SBI PO Course 2021</h5>
          </div>
        </div>
        <div className='boxDiv'>
          <div className='imageBox'></div>
          <div className='titleDiv'>
            <h5>RBI Grade B 2021 Complete Course</h5>
          </div>
        </div>
        <div className='boxDiv'>
          <div className='imageBox'></div>
          <div className='titleDiv'>
            <h5>The Mechatronics Revolution: Fundamentals and Core Concepts</h5>
          </div>
        </div>
        <div className='boxDiv'>
          <div className='imageBox'></div>
          <div className='titleDiv'>
            <h5>SBI PO Course 2021</h5>
          </div>
        </div>
        <div className='boxDiv'>
          <div className='imageBox'></div>
          <div className='titleDiv'>
            <h5>RBI Grade B 2021 Complete Course</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageTitleBox;
