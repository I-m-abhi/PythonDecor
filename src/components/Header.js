import { useState } from 'react';
import logo from '../Images/logo.png';
import GetInTouch from './GetInTouch';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [getInTouch, setGetInTouch] = useState(false);
  const currentRoute = useLocation().pathname.toLowerCase();

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
      <header className={fixedHeader ? 'header-section fixed' : 'header-section'}>
        <div className="container">
          <div className='header-brand'>
            <div className="logo">
              <img src={logo} alt="Python Decor & Associates" />
            </div>
            <h1>Python Decor <br /><span>& Associates</span></h1>
          </div>
          <nav className='navbar'>
            <ul>
              <li>
                <Link to='/'
                  className='nav-link'
                  style={{ color: currentRoute.includes("/") ? "#48C989" : "" }}>Home</Link>
              </li>
              <li>
                <AnchorLink href="#about-section">
                  About us
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#service-section">
                  Services
                </AnchorLink>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li>
                <AnchorLink href="#footer-section">
                  Contact us
                </AnchorLink>
              </li>
            </ul>
          </nav>
          <div className="connect">
            <button onClick={openGetInTouch}>Get in Touch</button>
          </div>
        </div>
      </header>
      <GetInTouch getInTouch={getInTouch} setGetInTouch={setGetInTouch} />
    </>
  )
};

export default Header;