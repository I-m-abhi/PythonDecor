import { ReactComponent as Icon1 } from '../Images/Icon/icon-1.svg';
import { ReactComponent as Icon2 } from '../Images/Icon/icon-2.svg';
import { ReactComponent as Icon3 } from '../Images/Icon/icon-3.svg';
import { ReactComponent as Icon4 } from '../Images/Icon/icon-4.svg';
import { ReactComponent as Icon5 } from '../Images/Icon/icon-5.svg';
import { ReactComponent as Icon6 } from '../Images/Icon/icon-6.svg';
import SectionHead from './SectionHead';

const Services = () => {
  const serviceObj = [
    {
      icon: <Icon1 className='service-icon' />,
      serviceName: 'Plans and Projects',
      servicePara: 'We provide a range of architectural 3D modeling services to our customers to aid the design, planning and...'
    },
    {
      icon: <Icon2 className='service-icon' />,
      serviceName: 'Interior',
      servicePara: 'Analysis and planning services that help both the client and architects to work out the forthcoming project...'
    },
    {
      icon: <Icon3 className='service-icon' />,
      serviceName: 'Exterior',
      servicePara: 'We offer comprehensive Architectural Engineering Services including Interior design, Master planning, 3D modeling...'
    },
    {
      icon: <Icon4 className='service-icon' />,
      serviceName: 'Architecture',
      servicePara: 'Project management is the process by which our team plans and executes your project. We will develop it...'
    },
    {
      icon: <Icon5 className='service-icon' />,
      serviceName: 'Furniture',
      servicePara: 'Our team also provides consultations on all architectural issues, even if you need specific info about working...'
    },
    {
      icon: <Icon6 className='service-icon' />,
      serviceName: 'Decoration',
      servicePara: 'We combine Interior and Exterior Design services and often provide them as a single solution. It helps us...'
    },
  ];

  return (
    <div id="service-section">
      <div className="container">
        <SectionHead sectionHeading={'Services'} />
        <div className="grid grid-three-cols">
          {
            serviceObj.map((item, key) => {
              return (
                <div className="content" key={key}>
                  <div className="num">{'0' + (key + 1)}</div>
                  <div className='service-icon--box'>{item.icon}</div>
                  <h3>{item.serviceName}</h3>
                  <p>{item.servicePara}</p>
                  <button>Read more</button>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
};

export default Services;