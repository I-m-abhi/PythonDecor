import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";

const MediaLinks = ()=> {
  return (
    <div className="medialinks">
      <div className="media">
        <ul>
          <li> <GrFacebookOption /> </li>
          <li> <PiInstagramLogo /></li>
          <li> <LiaLinkedinIn/> </li>
          <li> <PiPinterestLogo/> </li>
        </ul>
      </div>
      <div className="buttons">
          <button> &lt; </button>
          <button> &gt; </button>
      </div>
    </div>
  )
};

export default MediaLinks;