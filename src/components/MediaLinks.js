import { LiaWhatsapp } from "react-icons/lia";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";

const MediaLinks = ({ sliderIndex, setSliderIndex, length }) => {
  const preMainSlider = () => {
    if (sliderIndex === 0) {
      setSliderIndex(length - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };
  const nextMainSlider = () => {
    if (sliderIndex === length - 1) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  return (
    <section className="media-section">
      <div className="container">
        <ul>
          <li className="media-icons"> <LiaWhatsapp /> </li>
          <li className="media-icons"> <GrFacebookOption /> </li>
          <li className="media-icons"> <PiInstagramLogo /> </li>
          <li className="media-icons"> <LiaLinkedinIn /> </li>
          <li className="media-icons"> <PiPinterestLogo /> </li>
        </ul>
        <div>
          <button onClick={preMainSlider}>Pre.</button>
          <button onClick={nextMainSlider}>Next</button>
        </div>
      </div>
    </section>
  )
};

export default MediaLinks;