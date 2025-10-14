import React, { useState, useEffect, useRef } from "react";
import "./Mainone.css"; // your CSS for this component

export const CARD_DATA = [
  {
    id: "sps-card-3-lite",
    title: "Automotive",
    icon: "fa-car",
    link: "/industries/automotive",
    desc: "Driving the future of mobility with intelligent, connected, and autonomous solutions for vehicles.",
    submenu: [
      { text: "ADAS & Autonomous", url: "industries/automotive/adas-autonomous" },
      { text: "Body Electronics & AUTOSAR", url: "industries/automotive/body-electronics-autosar" },
      { text: "Integrated Cockpit", url: "industries/automotive/integrated-cockpit" },
      { text: "Telematics, V2X & Smart Mobility", url: "industries/automotive/telematics-v2x-smart-mobility" },
    ],
  },
  {
    id: "sps-card-5-lite",
    title: "Enterprise Devices",
    icon: "fa-server",
    link: "/industries/enterprise-devices",
    desc: "Designing secure hardware and software for mission-critical business environments, ensuring reliability.",
    submenu: [
      { text: "Hardware Design & Development", url: "industries/enterprise-devices/hardware-design-and-development" },
      { text: "Embedded Software Development", url: "industries/enterprise-devices/embedded-software-development" },
      { text: "Android Security Management Services", url: "industries/enterprise-devices/android-security-management-services" },
      { text: "Android Services", url: "industries/enterprise-devices/android-services" },
      { text: "Device & Platform Testing", url: "industries/enterprise-devices/device-and-platform-testing" },
    ],
  },
  {
    id: "sps-card-1-lite",
    title: "Semiconductor",
    icon: "fa-microchip",
    link: "/industries/semiconductor",
    desc: "Empowering next-gen silicon with our expertise in chip design, verification, and embedded systems for diverse applications.",
    submenu: [
      { text: "Hardware Design", url: "industries/semiconductor/hardware-design" },
      { text: "Platform & Application Software", url: "industries/semiconductor/platform-and-application-software" },
      { text: "Modem Software Development", url: "industries/semiconductor/modem-software-development" },
    ],
  },
  {
    id: "sps-card-2-lite",
    title: "Consumer Electronics",
    icon: "fa-mobile-alt",
    link: "/industries/consumer-electronics",
    desc: "Crafting intuitive experiences for the world's leading consumer devices and evolving digital lifestyle products.",
    submenu: [
      { text: "Hardware Design & Development", url: "industries/consumer-electronics/hardware-design-and-development" },
      { text: "Embedded Software Development", url: "industries/consumer-electronics/embedded-software-development" },
      { text: "Application Development", url: "industries/consumer-electronics/application-development" },
      { text: "Android Security Management Services", url: "industries/consumer-electronics/android-security-management-services" },
      { text: "Device And Platform Testing", url: "industries/consumer-electronics/device-and-platform-testing" },
    ],
  },
  {
    id: "sps-card-6-lite",
    title: "Satcom",
    icon: "fa-satellite",
    link: "/industries/satcom",
    desc: "Delivering advanced communication solutions for next-gen satellite systems and complex ground operations.",
    submenu: [
      { text: "Access Network Enhancement, Maintenance & IP", url: "industries/satcom/access-network-enhancement-maintenance-and-ip" },
      { text: "Application Development", url: "industries/satcom/application-development" },
      { text: "Embedded Software Development", url: "industries/satcom/embedded-software-development" },
      { text: "Terminal Design & Development", url: "industries/satcom/terminal-design-and-development" },
    ],
  },
  {
    id: "sps-card-7-lite",
    title: "Telecom",
    icon: "fa-broadcast-tower",
    link: "/industries/telecom",
    desc: "Building the backbone of modern connectivity with 5G radio access networks and core infrastructure.",
    submenu: [
      { text: "Modem Software Development", url: "industries/telecom/modem-software-development" },
      { text: "Radio Access Networks", url: "industries/telecom/radio-access-networks" },
    ],
  },
  {
    id: "sps-card-4-lite",
    title: "Industrials",
    icon: "fa-industry",
    link: "/industries/industrials",
    desc: "Optimizing operations across manufacturing and energy sectors with robust Industrial IoT and automation.",
    submenu: [
      { text: "Off-Highway Machines", url: "industries/industrials/off-highway-machines" },
      { text: "Connected Manufacturing", url: "industries/industrials/connected-manufacturing" },
      { text: "Machine Tools", url: "industries/industrials/machine-tools" },
    ],
  },
  {
    id: "sps-card-8-lite",
    title: "Transportation",
    icon: "fa-truck",
    link: "/transportation-services",
    desc: "Innovating logistics and smart mobility with solutions for intelligent fleet management and urban transport.",
    submenu: [],
  },
];


function Mainone() {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  // Handle smooth scroll for nav clicks
  const handleNavClick = (index, id) => {
    setActiveCard(index);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Optional: Update active nav on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = CARD_DATA.findIndex((c) => c.id === entry.target.id);
          if (entry.isIntersecting && idx !== -1) {
            setActiveCard(idx);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const cards = containerRef.current?.querySelectorAll(".sps-industry-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sasken-parallax-spotlight-lite" ref={containerRef}>
      <div className="sps-container">
        <div className="sps-layout">
          {/* Sticky Header */}
          <div className="sps-sticky-content">
            <div className="sps-header">
              <h2 className="sps-title">Our Industry Expertise</h2>
              <p className="sps-intro">
                At Sasken, we blend deep domain knowledge with cutting-edge engineering to create transformative
                solutions. Our expertise spans critical sectors, empowering businesses to innovate, optimize, and lead.
              </p>
            </div>
            <ul className="sps-nav-list">
              {CARD_DATA.map((card, index) => (
                <li
                  key={card.id}
                  className={`sps-nav-item ${index === activeCard ? "active" : ""}`}
                  onClick={() => handleNavClick(index, card.id)}
                >
                  <a href={`#${card.id}`}>{card.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scrolling Cards */}
          <div className="sps-scrolling-content">
            {CARD_DATA.map((card) => (
              <div key={card.id} id={card.id} className="sps-industry-card">
                <div className="sps-content-wrapper">
                  <div className="sps-card-title-row">
                    <div className="sps-icon">
                      <i className={`fas ${card.icon}`}></i>
                    </div>
                    <h3 className="sps-card-title">{card.title}</h3>
                  </div>
                  <div className="sps-description">{card.desc}</div>
                  {card.submenu?.length > 0 && (
                    <ul className="sps-submenu-list">
                      {card.submenu.map((item, idx) => (
                        <li key={idx}>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a href={card.link} className="sps-learn-more">
                    Explore Solutions <span className="sps-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sps-footer-cta">
          <p className="sps-outro">
            Our versatile engineering expertise extends beyond these core sectors. We invite you to discuss how our
            tailored solutions can empower your business.
          </p>
          <a href="/contact-us" className="sps-general-cta-btn">
            Connect With Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mainone;
