import React, { useState, useEffect } from 'react';

function Page2({ currentPage, goToPage, totalPages, isActive }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle page scroll locking and navigation disabling when modal is open
  useEffect(() => {
    const pageElement = document.querySelector('.page-2.active');
    
    if (modalOpen) {
      // Set global modal state to disable page navigation
      window.modalOpen = true;
      
      // Prevent scrolling on the active page
      if (pageElement) {
        pageElement.classList.add('modal-open');
        // Scroll the page content to top to center modal
        pageElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      // Remove global modal state to re-enable page navigation
      window.modalOpen = false;
      
      // Re-enable scrolling
      if (pageElement) {
        pageElement.classList.remove('modal-open');
      }
    }

    // Cleanup
    return () => {
      window.modalOpen = false;
      if (pageElement) {
        pageElement.classList.remove('modal-open');
      }
    };
  }, [modalOpen]);

  const cardData = [
    {
      id: 1,
      title: "Social Media Marketing",
      subtitle: "To Add",
      description: "To Add.",
      icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center",
      fullContent: `We create, manage, and optimize campaigns that build authentic connections across platforms.
From content planning and creative development to paid advertising and analytics, we help you
engage the right audience and grow your online presence`,
      color: "#ff6b6b"
    },
    {
      id: 2,
      title: "Public Relations & Media Outreach",
      subtitle: "To Add",
      description: "To Add.",
      icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop&crop=center",
      fullContent:`Our PR team helps craft your brand narrative and gets it in front of the right people. We build
relationships with media outlets, influencers, and industry leaders to secure meaningful coverage
that enhances your credibility and visibility.`,
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "Brand Strategy & Messaging",
      subtitle: "To Add",
      description: "To Add.",      icon: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=400&fit=crop&crop=center",
      fullContent:`We work with you to define and sharpen your brand's voice, positioning, and core messaging.
      Through research, workshops, and collaborative sessions, we help ensure your brand story is clear,
      consistent, and impactful across all channels`,
      color: "#45b7d1"
    },
    {
      id: 4,
      title: "Content Creation & Campaign Development",
      subtitle: "To Add",
      description: "To Add.",      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center",
      fullContent:`From compelling copy and visual assets to full-scale campaign concepts, we bring ideas to life. Our
team develops creative materials that resonate-whether it's for social media, email marketing,
websites, or print.`,
      color: "#f9ca24"
    },
    {
      id: 5,
      title: "Digital Advertising & Performance Marketing",
      subtitle: "To Add",
      description: "To Add.",      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center",
      fullContent:`We design and manage targeted ad campaigns across platforms like Facebook, Instagram, Google,
and LinkedIn. Our data-driven approach ensures your budget is used efficiently, driving traffic, leads, and conversions.`,
      color: "#f9ca24"
    },
    {
      id: 6,
      title: "Consultation & Custom Solutions",
      subtitle: "To Add",
      description: "To Add.",
      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center",
      fullContent:`Not sure where to start? We offer personalized consultations to understand your goals and
challenges, then recommend tailored strategies to move your brand forward.
Connect with our team today and let's build something impactful together.`,
      color: "#f9ca24"
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedCard(null), 300);
  };

  return (
    <div className={`page page-2${isActive ? ' active' : ''}`} data-page="2">
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
        
        <div className="cards-grid">
          {cardData.map((card, index) => (
            <div 
              key={card.id}
              className="card"
              style={{ '--delay': `${index * 0.1}s`, '--color': card.color }}
              onClick={() => openModal(card)}
            >
              <div className="card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
              </div>
              <div className="card-hover-overlay">
                <span>Click to learn more</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Modal */}
      {modalOpen && selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div 
              className="modal-header" 
              style={{ 
                '--color': `color-mix(in srgb, ${selectedCard.color} 0%, transparent)`,
                backgroundImage: `url(${selectedCard.modalImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                borderRadius: 'inherit'
              }}></div>
              <h2 style={{
                position: 'relative',
                zIndex: 2,
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                margin: '0',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>{selectedCard.title}</h2>
              <h3 style={{
                position: 'relative',
                zIndex: 2,
                color: 'white',
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                margin: '0.5rem 0 0 0',
                fontSize: '1.2rem',
                fontWeight: 'normal',
                textAlign: 'center',
                opacity: 0.9
              }}>{selectedCard.subtitle}</h3>
            </div>
            <div className="modal-body">
              <p>{selectedCard.fullContent}</p>
            </div>
          </div>
        </div>
      )}

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