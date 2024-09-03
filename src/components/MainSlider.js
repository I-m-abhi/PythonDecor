import ModularKitchen from '../Images/Python/1.png';
import ModularKitchen1 from '../Images/Python/2.png';
import ModularKitchen2 from '../Images/Python/3.png';
import logo from '../Images/logo.jpeg';
const MainSlider = () => {

  const handlePre = () => {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
  }
  const handleNext = () => {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
  }

  return (
    <div className="mainslider">
      <div className="rotational-logo">
        <img className='logo' src={logo} alt="setting image" />
      </div>
      <div className="slide">
        <div className="item" style={{ backgroundImage: 'url(' + ModularKitchen + ')' }}>
          <div className="content">
            <div className="name">MODISH</div>
            <div className="heading">Highest Quality Kitchen Solutions</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: 'url(' + ModularKitchen1 + ')' }}>
          <div className="content">
            <div className="name">RELIABLE</div>
            <div className="heading">Professionals you can rely on</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>

        <div className="item" style={{ backgroundImage: 'url(' + ModularKitchen2 + ')' }}>
          <div className="content">
            <div className="name">VARIETY</div>
            <div className="heading">Flooring for Any Interior Site</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainSlider;