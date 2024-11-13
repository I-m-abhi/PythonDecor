import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="topbar-section">
      <div className="container">
        <p><span><MdOutlineMarkEmailRead /></span>pythondecorassociates@gmail.com</p>
        <p><span>Offers <CiDiscount1 /></span>Lorem ipsum dolor sit amet.</p>
        <p><span><IoIosCall /></span>+91 8271197098</p>
      </div>
    </div>
  )
};

export default TopBar;