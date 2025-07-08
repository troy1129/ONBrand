import React from 'react';

function Page3({ currentPage, goToPage, totalPages, isActive }) {
  return (
    <div className={`page page-3${isActive ? ' active' : ''}`} data-page="3">
      {/* Main content */}
      {/* <div style={{ zIndex: 1 }}>
        <h1>Our Services</h1>
      </div> */}
      <div className="page-info">
        <div className="current-page-name">Our Services</div>
        <div className="page-dots">
          {[1,2,3,4,5].map(n => (
            <div
              key={n}
              className={`page-dot${currentPage === n ? ' active' : ''}`}
              onClick={() => goToPage(n)}
            ></div>
          ))}
        </div>
        <div className="page-counter">3 of 5</div>
      </div>
      {/* Side page info */}
      <div className="side-page-info prev">
        <div className="page-name">About Us</div>
        <div className="page-dots">
          <div className="page-dot"></div>
          <div className="page-dot active"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
        </div>
        <div className="page-counter">2 of 5</div>
      </div>
      <div className="side-page-info next">
        <div className="page-name">Get In Touch</div>
        <div className="page-dots">
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot active"></div>
          <div className="page-dot"></div>
        </div>
        <div className="page-counter">4 of 5</div>
      </div>
    </div>
  );
}

export default Page3; 