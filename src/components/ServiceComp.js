import SectionHead from "./SectionHead";

const ServiceComp = ({sectionHeading, details}) => {
  return (
    <section id='service-section'>
      <div className="container">
        <SectionHead sectionHeading={sectionHeading}/>
        <div className="grid grid-three-cols">
          {details.map((elem, id) =>
            <div key={id} className="item">
              <div className="img-box">
                <img
                  src={elem.projectImg} alt="Projects Details Loading..." />
                {elem.imageOf ? <h3>{elem.imageOf}</h3> : ''}
              </div>
              <div className="content-text">
                {elem.location ? <h4>{elem.location}</h4> : ''}
                <p>{elem.moreDetails}</p>
              <button>View more</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceComp;
