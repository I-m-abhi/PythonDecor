import { useEffect, useState } from 'react';
import fixedImg from '../Images/1-ab.jpg';
import img1 from '../Images/about-slider/1.jpg';
import img2 from '../Images/about-slider/2.jpg';
import img3 from '../Images/about-slider/3.jpg';
import img4 from '../Images/about-slider/4.jpg';
import img5 from '../Images/about-slider/5.jpg';

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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (aboutSlideIndex >= 4) {
  //       setAboutSlideIndex(0);
  //     } else {
  //       setAboutSlideIndex(aboutSlideIndex + 1);
  //     }
  //   }, 5000)
  // })

  return (
    <div id="about-section">
      <div className="container">
        <div className="section-head">
          <h2>About us - </h2>
        </div>
        <div className="section-content">
          <div className="left-content">
            <h3>We are competitive in architecture solutions</h3>
            <p>Landscape design is a process of developing practical and pleasing outdoor living space. there are six principles of design that have been used by artists for centuries throughout all art forms, painting and floral design.</p>
            <div>
              <span>Read More</span>
            </div>
          </div>
          <div className="right-content">
            <div className="carousel">
              <div onClick={preSlider}>&lt;</div>
              <img src={AboutSlider[aboutSlideIndex].imgPath} alt="About-Slider" />
              <div onClick={nextSlider}>&gt;</div>
              <h2>{aboutSlideIndex + 1} / 5</h2>
            </div>
            <div className="carousel-before">
              <img src={fixedImg} alt="Fixed before Slider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;