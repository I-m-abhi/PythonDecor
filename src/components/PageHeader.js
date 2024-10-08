import { useState } from 'react';
import logo from '../Images/logo.jpeg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from 'react-router-dom';

const PageHeader = ({ imgPath, pageHeading, pageDes }) => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const currentRoute = useLocation().pathname.toLowerCase();
  const fixedOnScroll = () => {
    if (window.scrollY >= 100) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  window.addEventListener("scroll", fixedOnScroll);

  return (
    <div className="page-header-section" style={{ backgroundImage: 'url(' + imgPath + ')' }}>
      <div className={fixedHeader ? 'page-navbar page-nav-fixed' : 'page-navbar'}>
        <div className="logo-header">
          <img className='logo' src={logo} alt="Python Decor & Associates" />
          <h1>Python Decor</h1>
        </div>
        <div className="main-nav">
          <ul className="nav">
            <li><Link to='/' className='link'>Home</Link></li>
            <li>
              <Link
                to='/projects'
                className='link'
                style={{ color: currentRoute.includes("/projects") ? "#d7b39a" : "" }}>Projects
              </Link>
            </li>
            <li>
              <Link
                to='/blogs'
                className='link'
                style={{ color: currentRoute.includes("/blogs") ? "#d7b39a" : "" }}>
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to='/faq'
                className='link'
                style={{ color: currentRoute.includes("/faq") ? "#d7b39a" : "" }}>
                FAQ
              </Link>
            </li>
            <li><AnchorLink href="#footer-section" className='link'>Contact us</AnchorLink></li>
          </ul>
        </div>
      </div>
      <div className="item" >
        <div className="content">
          <div className="heading">{pageHeading}</div>
          <div className="des">{pageDes}</div>
        </div>
      </div>
    </div>
  )
};

export default PageHeader;
