import { useState } from 'react';
import fixedImg from '../Images/1-ab.jpg';
import img1 from '../Images/about-slider/1.jpg';
import img2 from '../Images/about-slider/2.jpg';
import img3 from '../Images/about-slider/3.jpg';
import img4 from '../Images/about-slider/4.jpg';
import img5 from '../Images/about-slider/5.jpg';
import about from '../Images/about-slider/about.jpeg';
import SectionHead from './SectionHead';

const About = () => {

  const AboutSlider = [
    {
      imgPath: img1,
    },
    {
      imgPath: img2,
    },
    {
      imgPath: img3,
    },
    {
      imgPath: img4,
    },
    {
      imgPath: img5,
    },
  ]
  const [aboutSlideIndex, setAboutSlideIndex] = useState(0);
  const preSlider = () => {
    if (aboutSlideIndex <= 0) {
      setAboutSlideIndex(4);
    } else {
      setAboutSlideIndex(aboutSlideIndex - 1);
    }
  }
  const nextSlider = () => {
    if (aboutSlideIndex >= 4) {
      setAboutSlideIndex(0);
    } else {
      setAboutSlideIndex(aboutSlideIndex + 1);
    }
  }

  return (
    <section id="about-section">
      <div className="container">
        <SectionHead sectionHeading={'About us'} />
        <div className="grid grid-two-cols">
          <div className="left-content">
            <h3>We are competitive in architecture solutions</h3>
            <p>Welcome to Python Decor & Associates, your partner in transforming spaces into beautiful, functional environments. Based in Delhi NCR, we offer a full spectrum of interior design and construction services, serving Faridabad, Noida, Greater Noida, and beyond. With our expertise in creating unique, personalized interiors, we focus on blending creativity with practicality to bring your vision to life.</p>
            <p>At Python Decor & Associates, we believe every space tells a story, and our passion lies in making that story remarkable. Whether it's a cozy residential haven or an elegant commercial setting, our dedicated team ensures every project reflects the client's style and needs, with a commitment to delivering quality craftsmanship and a seamless design experience.</p>
          </div>
          <div className="right-content">
                <div className="img-box"
                  style={{ backgroundImage: 'url(' + AboutSlider[aboutSlideIndex].imgPath + ')' }}
                >
                  <button onClick={nextSlider}>&lt;</button>
                  <button onClick={preSlider}>&gt;</button>
                </div>

            
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;