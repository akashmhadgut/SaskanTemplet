import React from "react";
import "./Service.css"; // your CSS for this component

const SERVICES_DATA = [
  {
    title: "Platform Development & Sustenance",
    icon: "fa-cubes-stacked",
    desc: "Building robust, scalable, and future-proof digital platforms...",
    link: "#",
  },
  {
    title: "Mobility",
    icon: "fa-person-walking-arrow-right",
    desc: "Creating seamless and engaging mobile experiences...",
    link: "#",
  },
  {
    title: "Data Analytics",
    icon: "fa-chart-pie",
    desc: "Transforming raw data into actionable insights...",
    link: "#",
  },
  {
    title: "Cloud Engineering",
    icon: "fa-rss",
    desc: "Designing secure and scalable cloud-native systems...",
    link: "#",
  },
  {
    title: "AI & Automation",
    icon: "fa-vial-circle-check",
    desc: "Leveraging automation and AI to boost efficiency...",
    link: "#",
  },
  {
    title: "Cybersecurity",
    icon: "fa-arrows-spin",
    desc: "Ensuring data integrity and secure digital ecosystems...",
    link: "#",
  },
  {
    title: "Integration Services",
    icon: "fa-arrows-spin",
    desc: "Connecting systems seamlessly for optimized workflows...",
    link: "#",
  },
  {
    title: "Innovation Lab",
    icon: "fa-link",
    desc: "Driving creative digital prototypes and experimentation...",
    link: "#",
  },
  {
    title: "Consulting",
    icon: "fa-shield-halved",
    desc: "Guiding businesses through digital transformation journeys...",
    link: "#",
  },
];

function Service() {
  return (
    <div className="services-section">
      <h1 className="digital-services">Our Digital Engineering Services</h1>
      <p className="about-degitil">
        We harness the power of digital to architect, build, and scale transformative solutions...
      </p>

      <div className="services-cards">
        {SERVICES_DATA.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">
              <i className={`fa-solid ${service.icon}`}></i>
            </span>
            <h1>{service.title}</h1>
            <p>{service.desc}</p>
            <a href={service.link}>
              Learn More <span>→</span>
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "60px" }}>
        <div className="service-footer">
          <p className="service-para">
            Ready to accelerate your digital transformation journey? Let's discuss how our
            comprehensive engineering expertise can bring your vision to life.
          </p>
        </div>
        <div>
          <button className="connectbtn">Contact With Us</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
