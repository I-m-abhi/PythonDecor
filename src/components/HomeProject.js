import SectionHead from "./SectionHead";

const HomeProject = ({sectionHeading, details}) => {
  return (
    <section className='project-section'>
      <div className="container">
        <SectionHead sectionHeading={sectionHeading}/>
        <div className="project-listing">
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
              </div>
              <button>View more</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HomeProject;
