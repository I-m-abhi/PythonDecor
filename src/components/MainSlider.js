import { useEffect, useState } from 'react';
import ModularKitchen from '../Images/Python/1.png';
import ModularKitchen1 from '../Images/Python/2.png';
import ModularKitchen2 from '../Images/Python/3.png';
import logo from '../Images/logo.jpeg';
import MediaLinks from './MediaLinks';
const MainSlider = () => {
  const MySlider = [
    {
      name: 'MODISH',
      heading: 'Highest Quality Kitchen Solutions',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imgPath: ModularKitchen,
    },
    {
      name: 'RELIABLE',
      heading: 'Professionals you can rely on',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imgPath: ModularKitchen1,
    },
    {
      name: 'VARIETY',
      heading: 'Flooring for Any Interior Site',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imgPath: ModularKitchen2,
    },
  ];
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderIndex >= 2) {
        setSliderIndex(0);
      } else {
        setSliderIndex(sliderIndex + 1);
      }
    }, 75000)

    clearTimeout(timer);
  }, [sliderIndex]);

  return (
    <>
      <div className="mainslider">
        <div className="rotational-logo">
          <img className='logo' src='https://i.pinimg.com/736x/9d/cc/7f/9dcc7f94d3ebfc540911b0e0c8257a48.jpg' alt="Python Logo" />
        </div>
        <div className="slide">
          <div className="item" style={{ backgroundImage: 'url(' + MySlider[sliderIndex].imgPath + ')' }}>
            <div className="content">
              <div className="name">{MySlider[sliderIndex].name}</div>
              <div className="heading">{MySlider[sliderIndex].heading}</div>
              <div className="des">{MySlider[sliderIndex].des}</div>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <MediaLinks sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
    </>
  )
};

export default MainSlider;