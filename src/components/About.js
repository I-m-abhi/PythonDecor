import fixedImg from '../Images/1-ab.jpg';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="section-head">
          <h2>About us - </h2>
        </div>
        <div className="section-content">
          <div className="left-content">
            <h3>We are competitive in architecture solutions</h3>
            <p>Landscape design is a process of developing practical and pleasing outdoor living space. there are six principles of design that have been used by artists for centuries throughout all art forms, painting and floral design.</p>
            <div>
              <span>Read More</span>
            </div>
          </div>
          <div className="right-content">
            <div className="carousel">
              <img src="https://images.pexels.com/photos/600114/pexels-photo-600114.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="carousel-before">
              <img src={fixedImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;