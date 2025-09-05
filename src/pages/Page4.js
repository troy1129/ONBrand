import React, { useState } from 'react';

function Page4({ currentPage, goToPage, totalPages, isActive }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form validation and submission logic here
  };

  return (
    <div className={`page page-4${isActive ? ' active' : ''}`} data-page="4">
      {/* Main Contact Content */}
      <div className="contact-container">
        <div className="contact-content">
          {/* Left side - Contact Info */}
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>Feel free to use the form or drop us an email. Old-fashioned phone calls work too.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon phone">📞</div>
                <span>(470) 945-4008</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon email">✉️</div>
                <span>info@onbrandvisual.com</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon location">📍</div>
                <div className="address">
                  <span>8735 Dunwoody Pl.</span>
                  <span>Suite 6, Atlanta, Georgia, 30350</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <div className="name-inputs">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="xxx-xxx-xxxx"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message ..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="page-info">
        <div className="current-page-name">Get In Touch</div>
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
          <div className="page-dot"></div>
          <div className="page-dot active"></div>
          <div className="page-dot"></div>
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

export default Page4; 
