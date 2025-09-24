import React, { useState, useEffect, useCallback } from 'react';

function Page2({ currentPage, goToPage, totalPages, isActive }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Handle window resize for responsive centering
  const handleResize = useCallback(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const cardData = [
    {
      id: 1,
      title: "Social Media Marketing",
      icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      fullContent: `We create, manage, and optimize campaigns that build authentic connections across platforms. From content planning and creative development to paid advertising and analytics, we help you engage the right audience and grow your online presence`,
      color: "#ff6b6b"
    },
    {
      id: 2,
      title: "Public Relations & Media Outreach",
      icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center",
      fullContent:`Our PR team helps craft your brand narrative and gets it in front of the right people. We build relationships with media outlets, influencers, and industry leaders to secure meaningful coverage that enhances your credibility and visibility.`,
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "Brand Strategy & Messaging",
      icon: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop&crop=center",
      fullContent:`We work with you to define and sharpen your brand's voice, positioning, and core messaging. Through research, workshops, and collaborative sessions, we help ensure your brand story is clear, consistent, and impactful across all channels`,
      color: "#45b7d1"
    },
    {
      id: 4,
      title: "Content Creation & Campaign Development",
      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      fullContent:`From compelling copy and visual assets to full-scale campaign concepts, we bring ideas to life. Our team develops creative materials that resonate-whether it's for social media, email marketing, websites, or print.`,
      color: "#f9ca24"
    },
    {
      id: 5,
      title: "Digital Advertising & Performance Marketing",
      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      fullContent:`We design and manage targeted ad campaigns across platforms like Facebook, Instagram, Google, and LinkedIn. Our data-driven approach ensures your budget is used efficiently, driving traffic, leads, and conversions.`,
      color: "#f9ca24"
    },
    {
      id: 6,
      title: "Consultation & Custom Solutions",
      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      fullContent:`Not sure where to start? We offer personalized consultations to understand your goals and challenges, then recommend tailored strategies to move your brand forward. Connect with our team today and let's build something impactful together.`,
      color: "#f9ca24"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cardData.length) % cardData.length);
  };


  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
  };

  // Mouse handlers for desktop drag
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    const endX = e.clientX;
    const deltaX = startX - endX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
  };

  return (
    <div className={`page page-2${isActive ? ' active' : ''}`} data-page="2">
      <video
        className="hero-bg-image"
        src={process.env.PUBLIC_URL + '/bgvid.mp4'}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay"></div>
      {/* Cards Container */}
      <div className="cards-container">
        <div className="page-header">
          <h1>Our Services</h1>
          <p>At On Brand Visuals, we provide smart, results-driven marketing and PR solutions designed to help
brands stand out, connect, and thrive in today's fast-moving digital world. Every service we offer is
backed by strategy, creativity, and a deep commitment to helping you achieve measurable impact.
Explore how we can elevate your brand:
</p>
        </div>
        
        {/* Carousel Container */}
        <div className="carousel-container">
          {/* Desktop Navigation Buttons */}
          <button 
            className="carousel-nav carousel-nav-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setIsDragging(false)}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cardData.map((card, index) => (
                <div 
                  key={card.id}
                  className="carousel-slide"
                  style={{ '--color': card.color }}
                >
                  <div className="card">
                    <div className="card-icon" style={{height:'50%'}}>
                      <img src={card.icon} alt={card.title} />
                    </div>
                    <div className="card-content">
                      <h3>{card.title}</h3>
                      <p>{card.fullContent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav carousel-nav-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </div>

        
      </div>


      {/* Page Navigation Info */}
      <div className="page-info">
        <div className="current-page-name">Our Services</div>
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
        <div className="page-name">Welcome</div>
        <div className="page-dots">
          <div className="page-dot active"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
        </div>
      </div>
      <div className="side-page-info next">
        <div className="page-name">Our Services</div>
        <div className="page-dots">
          <div className="page-dot"></div>
          <div className="page-dot"></div>
          <div className="page-dot active"></div>
          <div className="page-dot"></div>
          <div className="page-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default Page2; 