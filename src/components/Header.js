import logo from '../Images/logo.jpeg';

const Header = () => {
  return (
    <div className="navbar">
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