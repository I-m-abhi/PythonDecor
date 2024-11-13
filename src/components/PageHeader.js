const PageHeader = ({ imgPath, pageHeading, pageDes }) => {

  return (
    <div className="page-header-section" style={{ backgroundImage: 'url(' + imgPath + ')' }}>
      <div className="container">
        <div className="heading">{pageHeading}</div>
        <div className="des">{pageDes}</div>
      </div>
    </div>
  )
};

export default PageHeader;
