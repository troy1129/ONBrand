import React from 'react';

function Page3({ currentPage, goToPage, totalPages, isActive }) {
  return (
    <div className={`page page-3${isActive ? ' active' : ''}`} data-page="3">
      {/* Main content */}
      <div className="page-content">
      <video
        className="hero-bg-image"
        src="/bgvid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <div className="hero-overlay"></div> */}
      <div className="main-content">
        <div className="content-columns">
          {/* First Column: Brand and Slogan */}
          <div className="brand-column">
            <div className="brand-content">
              <h1 className="hero-title">WHERE STRATEGY<br />MEETS STORYTELLING</h1>
              <button className="hero-btn">ABOUT US</button>
            </div>
          </div>
          
          {/* Second Column: Who We Are */}
          <div className="who-column">
            <div className="who-we-are-card">
              <h2 className="who-title">WHO WE ARE</h2>
              <div className="who-content">
                <p>On Brand Visual was born out of one simple belief: brands don't just need attention—they need connection. What began as a small group of creatives and communicators freelancing from coffee shops and home offices has since grown into a full-service PR and marketing firm with a global mindset and human-first approach. Our team is made up of strategists, storytellers, designers, and digital hikers—each bringing a different perspective but all united by the same purpose: to help brands find their voice and share it with the world in a way that resonates. We partner with businesses, authors, influencers, and organizations who are ready to move past the noise and stand out with purpose. With a balance of creativity, strategy, and authenticity, we turn vision into visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="page-info">
        <div className="current-page-name">Our Work</div>
        <div className="page-dots">
          {[1,2,3,4].map(n => (
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
        <div className="page-name">Our Services</div>
        <div className="page-dots">
          <div className="page-dot"></div>
          <div className="page-dot active"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
        </div>
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
      </div>
    </div>
  );
}

export default Page3; 