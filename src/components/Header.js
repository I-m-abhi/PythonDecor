import { useState } from 'react';
import logo from '../Images/logo.jpeg';
import GetInTouch from './GetInTouch';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [getInTouch, setGetInTouch] = useState(false);

  const fixedOnScroll = () => {
    if (window.scrollY >= 100) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  window.addEventListener("scroll", fixedOnScroll);

  const openGetInTouch = () => {
    setGetInTouch(true);
  };

  return (
    <>
      <div className={fixedHeader ? 'navbar fixed' : 'navbar'}>
        <div className="logo-header">
          <img className='logo' src={logo} alt="Python Decor & Associates" />
          <h1>Python Decor</h1>
        </div>
        <div className="main-nav">
          <ul className="nav">
          <Link to='/'><li>Home</li></Link>
            <AnchorLink href="#about-section">
              <li>About us</li>
            </AnchorLink>
            <AnchorLink href="#service-section">
              <li>Services</li>
            </AnchorLink>
            <Link to='/projects'><li>Projects</li></Link>
            <li>Blog</li>
            <Link to='/faq'><li>FAQ</li></Link>
            <AnchorLink href="#footer-section">
              <li>Contact us</li>
            </AnchorLink>
          </ul>
          <div className="connect">
            <button onClick={openGetInTouch}>Get in Touch</button>
          </div>
        </div>
      </div>
      <GetInTouch getInTouch={getInTouch} setGetInTouch={setGetInTouch} />
    </>
  )
};

export default Header;