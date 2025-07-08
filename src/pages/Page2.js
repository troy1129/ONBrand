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
      title: "Our Mission",
      subtitle: "Driving Innovation",
      description: "We are committed to delivering cutting-edge solutions that transform the way businesses operate in the digital age.",
      icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center",
      fullContent: "Our mission is to revolutionize the technology landscape by providing innovative solutions that empower businesses to reach their full potential. We believe in the power of technology to create positive change and drive growth across all industries.",
      color: "#ff6b6b"
    },
    {
      id: 2,
      title: "Our Vision",
      subtitle: "Future Forward",
      description: "Envisioning a world where technology seamlessly integrates with human potential to create limitless possibilities.",
      icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop&crop=center",
      fullContent: "We envision a future where technology and human creativity work hand in hand to solve the world's most challenging problems. Our vision drives us to constantly innovate and push the boundaries of what's possible.",
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "Our Values",
      subtitle: "Excellence & Integrity",
      description: "Built on trust, transparency, and a relentless pursuit of excellence in everything we do.",
      icon: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=400&fit=crop&crop=center",
      fullContent: "Our core values of integrity, excellence, innovation, and collaboration guide every decision we make. We believe that strong values are the foundation of any successful organization and lasting partnerships.",
      color: "#45b7d1"
    },
    {
      id: 4,
      title: "Our Team",
      subtitle: "Expert Professionals",
      description: "A diverse team of passionate experts dedicated to delivering exceptional results for our clients.",
      icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      modalImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center",
      fullContent: "Our team consists of highly skilled professionals from diverse backgrounds, united by a shared passion for innovation and excellence. We foster a collaborative environment where creativity thrives and every voice is heard.",
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
          <p>Discover what drives us and shapes our vision</p>
        </div>
        
        <div className="cards-grid">
          {cardData.map((card, index) => (
            <div 
              key={card.id}
              className="card"
              style={{ '--delay': `${index * 0.1}s`, '--color': card.color }}
              onClick={() => openModal(card)}
            >
              <div className="card-icon" style={{width: '100%', padding: '0', margin: '0'}}>
                <img src={card.icon} alt={card.title} style={{width: '100%', height: '120px', borderRadius: '8px', objectFit: 'cover'}} />
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
        
        {/* Additional content to make the page scrollable */}
        <div className="additional-content">
          <div className="content-section">
            <h2>Why Choose Our Services?</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center" alt="Lightning Fast" style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}} />
                </span>
                <div className="feature-text">
                  <h4>Lightning Fast</h4>
                  <p>Optimized performance for the best user experience</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=60&h=60&fit=crop&crop=center" alt="Secure & Reliable" style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}} />
                </span>
                <div className="feature-text">
                  <h4>Secure & Reliable</h4>
                  <p>Enterprise-grade security and 99.9% uptime guarantee</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=60&h=60&fit=crop&crop=center" alt="Precision Focused" style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}} />
                </span>
                <div className="feature-text">
                  <h4>Precision Focused</h4>
                  <p>Tailored solutions that meet your specific business needs</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=60&h=60&fit=crop&crop=center" alt="Award Winning" style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}} />
                </span>
                <div className="feature-text">
                  <h4>Award Winning</h4>
                  <p>Recognized excellence in innovation and customer service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="content-section">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Discovery</h4>
                <p>We begin by understanding your unique challenges and goals</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Strategy</h4>
                <p>Develop a comprehensive plan tailored to your requirements</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Implementation</h4>
                <p>Execute the solution with precision and attention to detail</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h4>Support</h4>
                <p>Ongoing maintenance and optimization for continued success</p>
              </div>
            </div>
          </div>
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
          {[1,2,3,4,5].map(n => (
            <div
              key={n}
              className={`page-dot${currentPage === n ? ' active' : ''}`}
              onClick={() => goToPage(n)}
            ></div>
          ))}
        </div>
        <div className="page-counter">2 of 5</div>
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
        <div className="page-counter">1 of 5</div>
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
        <div className="page-counter">3 of 5</div>
      </div>
    </div>
  );
}

export default Page2; 