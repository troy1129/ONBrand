import React from 'react';

function Page5({ currentPage, goToPage, totalPages, isActive }) {
  return (
    <div className={`page page-5${isActive ? ' active' : ''}`} data-page="5">
      <video
        className="hero-bg-image"
        src={process.env.PUBLIC_URL + '/bgvid.mp4'}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay"></div>
      {/* Main content */}
      {/* <div style={{ zIndex: 1 }}>
        <h1>Our Portfolio</h1>
      </div> */}
      <div className="page-info">
        <div className="current-page-name">Our Portfolio</div>
        <div className="page-dots">
          {[1,2,3,4,5].map(n => (
            <div
              key={n}
              className={`page-dot${currentPage === n ? ' active' : ''}`}
              onClick={() => goToPage(n)}
            ></div>
          ))}
        </div>
      </div>
      {/* Side page info */}
      <div className="side-page-info prev">
        <div className="page-name">Get In Touch</div>
        <div className="page-dots">
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot active"></div>
          <div className="page-dot"></div>
        </div>
      </div>
      <div className="side-page-info next hidden">
        <div className="page-name">Our Portfolio</div>
        <div className="page-dots">
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot active"></div>
        </div>
      </div>
    </div>
  );
}

export default Page5; 