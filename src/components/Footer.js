import { IoMdPaperPlane } from "react-icons/io";
import { LiaWhatsapp } from "react-icons/lia";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div id="footer-section">
      <div className="container">
        <div className="content-sec-top">
          <div className="intro-sec">
            <h2>Python Decor</h2>
            <p>7X Theme is a html template for interior and architecture purpose. Today we can tell you, thanks to your passion.</p>
          </div>
          <div className="link-sec">
            <h2>Useful links</h2>
            <div>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="contact-sec">
            <h2>Contact Us</h2>
            <div>
              <ul>
                <li>Greater Noida, UP, India, 201301</li>
                <li>pythondecorassociates@gmail.com</li>
                <li>+91 8271197098</li>
                <li>+91 6205510516</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-sec-bottom">
          <div className="foot-media">
            <ul>
              <li className="media-icons"> <LiaWhatsapp /> </li>
              <li className="media-icons"> <GrFacebookOption /> </li>
              <li className="media-icons"> <PiInstagramLogo /> </li>
              <li className="media-icons"> <LiaLinkedinIn /> </li>
              <li className="media-icons"> <PiPinterestLogo /> </li>
            </ul>
          </div>
          <div className="input-field">
            <input type="mail" placeholder="ENTER YOUR EMAIL" />
            <li> <IoMdPaperPlane className="footer-icon" /></li>
          </div>
        </div>
      </div>
      <div className="copyright-sec">
        <div className="container">
          <p>© 2022 Your Company. Designed By 7xtheme.</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;


// color: #e2e2e2;