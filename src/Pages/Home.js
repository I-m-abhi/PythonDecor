import TopBar from '../components/TopBar';
import Header from '../components/Header';
import MainSlider from '../components/MainSlider';
import MediaLinks from '../components/MediaLinks';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import Informative from '../components/Informative';

const Home = () => {
  return (
    <div className='home-page'>
      <TopBar />
      <Header />
      <MainSlider />
      <MediaLinks />
      <About />
      <WhatWeDo />
      <Informative />
    </div>
  )
};

export default Home;