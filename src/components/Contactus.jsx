import React from "react";
import "./Contactus.css"; // optional, your CSS file

function Contactus() {
  return (
    <div className="contact-us-section">
      <div className="contact-content">
        <h1>Ready to shape your success story?</h1>
        <h4>Discover how our proven expertise can drive your business forward</h4>
        <div className="button-group">
          <button className="primary-btn">Start Conversation →</button>
          <button className="secondary-btn">View Success Stories →</button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
