import TopBar from '../components/TopBar';
import Header from '../components/Header';
import MainSlider from '../components/MainSlider';
import About from '../components/About';
import Informative from '../components/Informative';
import HomeProject from '../components/HomeProject';
import { projectDetails, serviceDetails } from '../Constants/constants';
import ServiceComp from '../components/ServiceComp';
import ProjectsComp from '../components/ProjectsComp';
import Whyus from '../components/Whyus';

const Home = () => {
  return (
    <div className='home-page'>
      <MainSlider />
      <About />
      <Whyus />
      <ServiceComp sectionHeading={'Services'} details={serviceDetails}/>
      <Informative />
      <ProjectsComp sectionHeading={'Projects'} details={projectDetails}/>
    </div>
  )
};

export default Home;