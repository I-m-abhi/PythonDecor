import { useRef } from 'react';
import CountUp from 'react-countup';

const Informative = () => {
  const infographic = [
    {
      num: '05',
      content: 'Years of Experience',
    },
    {
      num: '05',
      content: 'Project Taken',
    },
    {
      num: '05',
      content: 'Project Completed',
    },
    {
      num: '345',
      content: 'Instagram Followers',
    },
  ];
  const countUpRef = useRef();

  return (
    <div className="informative-section">
      <div className="infographic">
        <div className="section-head">
          <h2>Infographic - </h2>
        </div>
        <div className="section-content">
          {infographic.map((item, id) =>
            <div key={id} className="content">
              <CountUp
                start={0}
                end={item.num}
                enableScrollSpy={true}
                ref={countUpRef}
              >
                {({ countUpRef }) => <span className='num' ref={countUpRef}>{item.num} </span>}
              </CountUp>
              <h2>{item.content}</h2>
            </div>
          )}
        </div>
      </div>
      <div className="testimonial">
        <div className="section-head">
          <h2>Testimonial - </h2>
        </div>
        <div className="section-content">
          <div className="client-details">
            <img src="https://theme7x.com/angular/inteshape/assets/images/testimonials/pic1.jpg" alt="" />
            <div className="details">
              <h2>Michel John</h2>
              <p>Architect</p>
            </div>
          </div>
          <div className="client-feedback">
            <p>“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”</p>
            <div className="counter">1 / 5</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Informative;