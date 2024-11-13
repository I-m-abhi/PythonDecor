import Pic1 from '../Images/pic1.jpg';
import Pic2 from '../Images/pic2.jpg';
import Pic3 from '../Images/pic3.jpg';
import SectionHead from './SectionHead';

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="right-content"></div>
      <div className="container">
        <SectionHead sectionHeading={'What We do'} />
        <div className="section-content">
          <div className="content">
            <div className='item'>
              <div>
                <img src={Pic1} alt="Interior Service Logo" />
              </div>
              <h4>Interior Design</h4>
            </div>
            <div className="num">01</div>
          </div>
          <div className="content">
            <div className='item'>
              <div>
                <img src={Pic2} alt="Architecture Service Logo" />
              </div>
              <h4>Architecture</h4>
            </div>
            <div className="num">02</div>
          </div>
          <div className="content">
            <div className='item'>
              <div>
                <img src={Pic3} alt="Floor Plan Service Logo" />
              </div>
              <h4>Floor Plan</h4>
            </div>
            <div className="num">03</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default WhatWeDo;