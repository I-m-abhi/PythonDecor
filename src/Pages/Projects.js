import PageHeader from "../components/PageHeader";
import projectPageBg from '../Images/3.jpg';
import { projectHeading } from "../Constants/constants";
import { projectDetails } from "../Constants/constants";
import { useState } from "react";

const Projects = () => {
  const [filteredProject, setFilteredProject] = useState(projectDetails);
  const [colorIndex, setColorIndex] = useState(0);
  const handleClick = (heading, id) => {
    if (heading === 'All') {
      setFilteredProject(projectDetails);
      setColorIndex(id);
    } else {
      const updatedProject = projectDetails.filter((item) => item.projectType === heading);
      setFilteredProject(updatedProject);
      setColorIndex(id);
    }
  };

  return (
    <div className="project-page">
      <PageHeader
        imgPath={projectPageBg}
        pageHeading='Masonry With 3 Columns'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <div className="container">
        <div className="project-heading">
          <ul>
            {projectHeading.map((heading, id) =>
              <li
                style={{ color: (colorIndex === id) ? '#d7b39a' : '' }}
                onClick={() => handleClick(heading, id)} key={id}>{heading}
              </li>
            )}
          </ul>
        </div>
        <div className="project-listing">
          {filteredProject.map((project, id) =>
            <div key={id} className="item">
              <div>
                <img
                  src={project.projectImg} alt="Projects Details Loading..." />
              </div>
              <div className="content-text">
                <h3>{project.imageOf}</h3>
                <h4>{project.location}</h4>
                <p>{project.moreDetails}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Projects;