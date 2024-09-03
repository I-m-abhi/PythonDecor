import Pic1 from '../Images/pic1.jpg';
import Pic2 from '../Images/pic2.jpg';
import Pic3 from '../Images/pic3.jpg';

const WhatWeDo = () => {
  return (
    <div className="what-we-do-section">
      <div className="right-content"></div>
      <div className="container">
        <div className="section-head">
          <h2>What We do - </h2>
        </div>
        <div className="section-content">
          <div className="content">
            <div className='item'>
              <img src={Pic1} alt="" />
              <h4>Interior Design</h4>
            </div>
            <div className="num">01</div>
          </div>
          <div className="content">
            <div className='item'>
              <img src={Pic2} alt="" />
              <h4>Architectur</h4>
            </div>
            <div className="num">02</div>
          </div>
          <div className="content">
            <div className='item'>
              <img src={Pic3} alt="" />
              <h4>Floor Plan</h4>
            </div>
            <div className="num">03</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WhatWeDo;