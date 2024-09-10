import { useState } from 'react';
import logo from '../Images/logo.jpeg';

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(false);

  const fixedOnScroll = () => {
    if (window.scrollY >= 100) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  window.addEventListener("scroll", fixedOnScroll);

  return (
    <div className={fixedHeader ? 'navbar fixed' : 'navbar'}>
      <div className="logo-header">
        <img className='logo' src={logo} alt="Python Decor & Associates" />
        <h1>Python Decor</h1>
      </div>
      <div className="main-nav">
        <ul className="nav">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
        <div className="connect">
          <button>Get in Touch</button>
        </div>
      </div>

    </div>
  )
};

export default Header;