const PageHeader = ({imgPath, pageHeading, pageDes}) => {
  return (
    <div className="page-header-section">
      <div className="item" style={{ backgroundImage: 'url(' + imgPath + ')' }}>
        <div className="content">
          <div className="heading">{pageHeading}</div>
          <div className="des">{pageDes}</div>
        </div>
      </div>
    </div>
  )
};

export default PageHeader;
