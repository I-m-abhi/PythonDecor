import Header from "./Header";
import MainSlider from "./MainSlider";
import MediaLinks from "./MediaLinks";
import TopBar from "./TopBar";

const LandingPage = ()=> {
  return (
    <div className="landingpage">
      <>
      <TopBar />
      <Header />
      <MainSlider />
      
    </>
      <MediaLinks />
    </div>
  )
};

export default LandingPage;
