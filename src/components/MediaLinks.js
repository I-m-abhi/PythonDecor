import { LiaWhatsapp } from "react-icons/lia";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";

const MediaLinks = ()=> {
  const preMainSlider = ()=> {};
  const nextMainSlider = ()=> {};

  return (
    <div className="medialinks">
      <div className="media">
        <ul>
          <li className="media-icons"> <LiaWhatsapp/> </li>
          <li className="media-icons"> <GrFacebookOption/> </li>
          <li className="media-icons"> <PiInstagramLogo/> </li>
          <li className="media-icons"> <LiaLinkedinIn/> </li>
          <li className="media-icons"> <PiPinterestLogo/> </li>
        </ul>
      </div>
      <div className="buttons">
          <button onClick={preMainSlider}> &lt; </button>
          <button onClick={nextMainSlider}> &gt; </button>
      </div>
    </div>
  )
};

export default MediaLinks;