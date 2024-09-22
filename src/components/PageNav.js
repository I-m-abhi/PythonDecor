import { useState } from 'react';
import logo from '../Images/logo.jpeg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';


const PageNav = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const fixedOnScroll = () => {
    if (window.scrollY >= 100) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  // window.addEventListener("scroll", fixedOnScroll);

  return (
    <div className={fixedHeader ? 'navbar fixed' : 'navbar'}>
        <div className="logo-header">
          <img className='logo' src={logo} alt="Python Decor & Associates" />
          <h1>Python Decor</h1>
        </div>
        <div className="main-nav">
          <ul className="nav">
          <Link to='/'><li>Home</li></Link>
            <li>Projects</li>
            <li>Blog</li>
            <Link to='/faq'><li>FAQ</li></Link>
            <AnchorLink href="#footer-section">
              <li>Contact us</li>
            </AnchorLink>
          </ul>
        </div>
      </div>
  )
};

export default PageNav;
