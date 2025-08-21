import React, { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 90 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 90);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update immediately and then every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="container">
            <div className="logo-section fade-in">
              <div className="logo-placeholder">
                <img 
                  src="/logo-placeholder.png" 
                  alt="IMPERIUM Logo" 
                  className="brand-logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'block';
                  }}
                />
                <div className="logo-fallback">
                  <div className="logo-box">
                    <span>LOGO</span>
                    <small>Replace with your logo</small>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="hero-title fade-in delay-1">Where Inner Mastery Meets Strategic Power</h2>
            
            {/* Coming Soon Message */}
            <div className="coming-soon-container fade-in delay-3">
              <h3 className="coming-soon-title">Website Coming Soon</h3>
              <p className="coming-soon-subtitle">Next cohort - Feb 2026, Private Access · By Invitation Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content fade-in">
            <h2 className="section-title">Join an Elite Community of Visionary CEOs</h2>
            <p className="about-description">
              Step into a world where exceptional leadership meets transformational growth. Our exclusive retreats bring together the most innovative CEOs and industry titans in intimate, carefully curated environments designed to unlock your highest potential and drive unprecedented business success.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title fade-in">What Sets Us Apart</h2>
          <div className="benefits-grid">
            <div className="benefit-item fade-in delay-1">
              <div className="benefit-icon">📊</div>
              <h3>Strategic Visioning Sessions</h3>
              <p>Deep-dive workshops with industry experts to refine your long-term strategic vision and execution roadmap.</p>
            </div>
            <div className="benefit-item fade-in delay-2">
              <div className="benefit-icon">🤝</div>
              <h3>Intimate Executive Roundtables</h3>
              <p>Small group discussions with peer CEOs facing similar challenges, fostering meaningful connections and insights.</p>
            </div>
            <div className="benefit-item fade-in delay-3">
              <div className="benefit-icon">🎯</div>
              <h3>Expert-Led Workshops</h3>
              <p>Learn from renowned business leaders, consultants, and thought leaders who have guided Fortune 500 transformations.</p>
            </div>
            <div className="benefit-item fade-in delay-4">
              <div className="benefit-icon">🌟</div>
              <h3>Personal Leadership Coaching</h3>
              <p>One-on-one sessions with executive coaches to enhance your leadership style and personal effectiveness.</p>
            </div>
            <div className="benefit-item fade-in delay-5">
              <div className="benefit-icon">🔮</div>
              <h3>Innovation & Future Planning</h3>
              <p>Explore emerging trends, technologies, and market opportunities to stay ahead of disruption.</p>
            </div>
            <div className="benefit-item fade-in delay-6">
              <div className="benefit-icon">🏆</div>
              <h3>Exclusive Network Access</h3>
              <p>Lifetime access to our alumni network of transformational leaders and ongoing collaboration opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3 className="footer-tagline">Where exceptional leaders become legendary</h3>
              <div className="footer-contact">
                <p>📧 imprerium@edstellar.com</p>
                <div className="office-locations">
                  <div className="office">
                    <h4>USA</h4>
                    <p>Edstellar Inc., 2785 Rockbrook Dr STE 204<br />Lewisville, TX 75067</p>
                  </div>
                  <div className="office">
                    <h4>India</h4>
                    <p>Edstellar Solutions Pvt Ltd., #1321, 3rd Floor,<br />Sarakki Extension, 100 Feet Ring Rd Marenahalli,<br />2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/edstellarofficial/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="nofollow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://x.com/edstellarglobal" className="social-icon" aria-label="Twitter" target="_blank" rel="nofollow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Elite CEO Retreats. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;