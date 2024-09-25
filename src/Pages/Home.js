import TopBar from '../components/TopBar';
import Header from '../components/Header';
import MainSlider from '../components/MainSlider';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import Informative from '../components/Informative';
import Services from '../components/Services';

const Home = () => {
  return (
    <div className='home-page'>
      <TopBar/>
      <Header/>
      <MainSlider />
      <About />
      <WhatWeDo />
      <Informative />
      <Services />
    </div>
  )
};

export default Home;