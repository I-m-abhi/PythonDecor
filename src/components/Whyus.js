import SectionHead from "./SectionHead";
import img1 from "../Images/whyus/1.png";
import img2 from "../Images/whyus/2.png";
import img3 from "../Images/whyus/3.png";
import img4 from "../Images/whyus/4.png";
import img5 from "../Images/whyus/5.png";
import img6 from "../Images/whyus/6.png";

const Whyus = () => {
  return (
    <section className="whyus-section">
      <div className="container">
        <SectionHead sectionHeading={'Why us'} />
        <div className="section-content">
          <div className="content">
            <div className="img-box">
              <img src={img1} alt=""  />
            </div>
            <p>"Complete Transparency in Design and Costs – No Surprises, Only Perfection!"</p>
          </div>
          <div className="content">
            <div className="img-box">
              <img src={img2} alt=""  />
            </div>
            <p>"Your Vision, Our Craftsmanship – No Upfront Cost, Just Honest Design."
            </p>
          </div>
          <div className="content">
            <div className="img-box">
              <img src={img3} alt=""  />
            </div>
            <p>"Designing Dreams Without Upfront Investment – Only Pay When You're Impressed!"</p>
          </div>
          <div className="content">
            <div className="img-box">
              <img src={img4} alt=""  />
            </div>
            <p>"No Upfront Payments, Only Inspired Interiors – Let's Build Your Space Together."</p>
          </div>
          <div className="content">
            <div className="img-box">
              <img src={img5} alt=""  />
            </div>
            <p>"Quality Design, Transparent Process – Material Selection Made Easy and Honest."</p>
          </div>
          <div className="content">
            <div className="img-box">
              <img src={img6} alt=""  />
            </div>
            <p>"Design First, Pay Later – Your Satisfaction Comes First!"</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whyus;
