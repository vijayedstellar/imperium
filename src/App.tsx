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
                  src="/logo.png" 
                  alt="IMPERIUM - Where Leaders Become Legends" 
                  className="brand-logo"
                />
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

    </div>
  );
}

export default App;
