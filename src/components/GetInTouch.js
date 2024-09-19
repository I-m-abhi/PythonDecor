import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { LiaWhatsapp } from "react-icons/lia";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

const GetInTouch = ({ getInTouch, setGetInTouch }) => {
  const closeGetInTouch = () => {
    setGetInTouch(false);
  };

  return (
    <>
      {getInTouch &&
        (<div className="getInTouch-section">
          <div className="container">
            <div className="contact-details">
              <div className="details">
                <div className="icon"><MdLocalPhone /></div>
                <div>
                  <h2>Phone Number</h2>
                  <p>6205510516</p>
                </div>
              </div>
              <div className="details">
                <div className="icon"><MdEmail /></div>
                <div>
                  <h2>Email Address</h2>
                  <p>pythondecorassociates@gmail.com</p>
                </div>
              </div>
              <div className="details">
                <div className="icon"><MdLocationPin /></div>
                <div>
                  <h2>Address Info</h2>
                  <p>Greater Noida, UP, India, 201301</p>
                </div>
              </div>
              <div className="details">
                <li className="media-icons"> <LiaWhatsapp /> </li>
                <li className="media-icons"> <GrFacebookOption /> </li>
                <li className="media-icons"> <PiInstagramLogo /> </li>
                <li className="media-icons"> <LiaLinkedinIn /> </li>
                <li className="media-icons"> <PiPinterestLogo /> </li>
              </div>
            </div>
            <div className="contact-form">
              <form action="">
                <div className="input-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="username" id="name" required />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="input-field">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name="phone" id="phone" required />
                </div>
                <div className="input-field">
                  <label htmlFor="message">Textarea</label>
                  <textarea name="message" id="message" required></textarea>
                </div>
                <div>
                  <button type="submit">SUBMIT NOW</button>
                </div>
              </form>
            </div>
          </div>
          <div className="cross">
            <RxCross2 onClick={closeGetInTouch} />
          </div>
        </div>
        )
      }
    </>
  )
};

export default GetInTouch;