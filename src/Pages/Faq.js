import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHead from '../components/SectionHead';
import faqPageBg from '../Images/7.jpg';

const Faq = () => {
  const [faqData] = useState([
    {
      isCollapsed: false,
      question: 'How do we work?',
      answer: 'Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..'
    },
    {
      isCollapsed: false,
      question: 'What services do we offer?',
      answer: 'Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..'
    },
    {
      isCollapsed: false,
      question: 'Do you have a purchasing fee on the product?',
      answer: 'Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..'
    },
    {
      isCollapsed: false,
      question: 'How long will it take to build my project?',
      answer: 'Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..'
    },
    {
      isCollapsed: false,
      question: 'What should I have at our first meeting for my project?',
      answer: 'Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..'
    },
  ]);
  const [showIndex, setShowIndex] = useState(0);
  const handleCollapsedFaq = (id) => {
    if (showIndex !== id) {
      setShowIndex(id);
    } else {
      setShowIndex(null);
    }
  };

  return (
    <div className="faq-page">
      <PageHeader
        imgPath={faqPageBg}
        pageHeading='Frequently Asked Questions'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <div className="container">
        <SectionHead sectionHeading='FAQ' />
        <div className="faq-section">
          <div className='left-faq'>
            {faqData.map((item, id) =>
            ((id % 2 === 0) ?
              <div key={id} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
              :
              ''
            )
            )}
          </div>
          <div className='right-faq'>
            {faqData.map((item, id) =>
              <div onClick={() => handleCollapsedFaq(id)} key={id} className="faq-item">
                <div className='collapse'>
                  <span>{item.question}</span>
                  {showIndex !== id ? <span> ➕ </span> : <span> ➖ </span>}
                </div>
                {showIndex === id && <p>{item.answer}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Faq;