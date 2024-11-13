import { MdLocalPhone, MdMarkEmailUnread } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { LiaWhatsapp } from "react-icons/lia";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const GetInTouch = ({ getInTouch, setGetInTouch }) => {
  const closeGetInTouch = () => {
    setGetInTouch(false);
  };

  return (
    <>
      {getInTouch &&
        (<section className="getInTouch-section">
          <div className="container grid grid-two-cols">
            <div className="sec-content">
              <ul>
                <li><IoLocation /></li>
                <li> Python Decor & Associates <br />
                  C-2207, Coco County <br />
                  Greater Noida, UP, 201301 <br />
                  ( Visit by Appointment Only )
                </li>
              </ul>
              <ul>
                <li><MdMarkEmailUnread /></li>
                <li> pythondecorassociates@gmail.com</li>
              </ul>
              <ul>
                <li><FaPhone /></li>
                <li> +91 8271197098</li>
              </ul>
            </div>
            <div className="contact-form">
              <form action="">
                <div className="input-field">
                  <label htmlFor="name">Name*</label><br />
                  <input type="text" name="username" id="name" required />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label><br />
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="input-field">
                  <label htmlFor="phone">Phone</label><br />
                  <input type="text" name="phone" id="phone" required />
                </div>
                <div className="input-field">
                  <label htmlFor="message">Property Details</label><br />
                  <textarea name="message" id="message" required></textarea>
                </div>
                <div>
                  <button type="submit">Submit Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="cross">
            <RxCross2 onClick={closeGetInTouch} />
          </div>
        </section>
        )
      }
    </>
  )
};

export default GetInTouch;