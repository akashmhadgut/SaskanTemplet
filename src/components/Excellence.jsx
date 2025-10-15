import React, { useEffect, useRef } from "react";
import "./Excellence.css";

const EXCELLENCE_CARDS = [
  { icon: "fa-calendar-alt", value: "36+", label: "Years", desc: "Industry experience" },
  { icon: "fa-university", value: "100+", label: "Fortune 500", desc: "Enterprise clients" },
  { icon: "fa-tasks", value: "500+", label: "Projects", desc: "Delivered solutions" },
  { icon: "fa-globe", value: "1B+", label: "Products", desc: "Powered globally" },
  { icon: "fa-award", value: "200+", label: "Patents", desc: "Innovation portfolio" },
];

function Excellence() {
  const svgRef = useRef(null);

  // ✅ Counter animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      const counters = document.querySelectorAll(".excellence-card h2");

      counters.forEach((counter) => {
        const targetText = counter.textContent.trim();
        const match = targetText.match(/(\d+)/);
        if (!match) return;
        const target = parseInt(match[1]);
        let current = 0;
        const increment = Math.ceil(target / 100);

        const updateCounter = () => {
          current += increment;
          if (current > target) current = target;
          const plus = targetText.includes("+") ? "+" : "";
          const spanText = counter.querySelector("span")?.textContent || "";
          counter.innerHTML = `${current}${plus} <span>${spanText}</span>`;
          if (current < target) requestAnimationFrame(updateCounter);
        };

        updateCounter();
      });
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  // ✅ SVG & repel effect
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.querySelectorAll("line").forEach((line) => {
      const [x1, y1, x2, y2] = [
        parseFloat(line.getAttribute("x1")),
        parseFloat(line.getAttribute("y1")),
        parseFloat(line.getAttribute("x2")),
        parseFloat(line.getAttribute("y2")),
      ];

      [[x1, y1], [x2, y2]].forEach(([x, y]) => {
        if (
          ![...svg.querySelectorAll("circle")].some(
            (c) =>
              Math.abs(c.getAttribute("cx") - x) < 1 &&
              Math.abs(c.getAttribute("cy") - y) < 1
          )
        ) {
          const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("cx", x);
          circle.setAttribute("cy", y);
          circle.setAttribute("r", 5);
          svg.appendChild(circle);
        }
      });
    });

    const repelRadius = 80;
    const repelForce = 18;

    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      svg.querySelectorAll("circle").forEach((circle) => {
        const cx = parseFloat(circle.getAttribute("cx"));
        const cy = parseFloat(circle.getAttribute("cy"));
        const dx = cx - mouseX;
        const dy = cy - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelRadius) {
          const angle = Math.atan2(dy, dx);
          const move = (1 - dist / repelRadius) * repelForce;
          const tx = Math.cos(angle) * move;
          const ty = Math.sin(angle) * move;
          circle.style.transform = `translate(${tx}px, ${ty}px)`;
        } else {
          circle.style.transform = `translate(0, 0)`;
        }
      });
    };

    svg.addEventListener("mousemove", handleMouseMove);
    return () => svg.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="excellence-section">
      <div className="excellence-header">
        <div className="text-content aboutExcellence">
          <h1>
            Three Decades of <br />
            <span>Excellence</span>
          </h1>
          <p>
            Our journey of innovation and growth is reflected in these key performance indicators.
            <br />
            <br />
            At Sasken, we revel in the spirit of innovation and discovery – of seeking the unexplored.
            We leverage our strengths to build capabilities that present an advantage to our business and customers.
          </p>
        </div>

        <div className="image-content">
          <div className="since-box">
            <svg
              ref={svgRef}
              className="esz-constellation-svg"
              width="400"
              height="400"
              viewBox="0 0 400 400"
            >
              <line x1="369.19489131566473" y1="200" x2="326.5171941166842" y2="273.0447360803837" />
              <line x1="369.19489131566473" y1="200" x2="275.0158539825883" y2="329.931270471011" />
              <line x1="369.19489131566473" y1="200" x2="269.3633496631188" y2="79.85915420031266" />
              <line x1="369.19489131566473" y1="200" x2="353.59865951999893" y2="111.31977257896283" />
              <line x1="326.5171941166842" y1="273.0447360803837" x2="275.0158539825883" y2="329.931270471011" />
              <line x1="326.5171941166842" y1="273.0447360803837" x2="200" y2="334.4777912438436" />
              <line x1="326.5171941166842" y1="273.0447360803837" x2="353.59865951999893" y2="111.31977257896283" />
              <line x1="275.0158539825883" y1="329.931270471011" x2="200" y2="334.4777912438436" />
              <line x1="275.0158539825883" y1="329.931270471011" x2="123.00296993818712" y2="333.3627680989682" />
              <line x1="200" y1="334.4777912438436" x2="123.00296993818712" y2="333.3627680989682" />
              <line x1="200" y1="334.4777912438436" x2="62.33864545764271" y2="279.47882010203847" />
              <line x1="123.00296993818712" y1="333.3627680989682" x2="62.33864545764271" y2="279.47882010203847" />
              <line x1="123.00296993818712" y1="333.3627680989682" x2="39.064147724364744" y2="200.00000000000003" />
              <line x1="62.33864545764271" y1="279.47882010203847" x2="39.064147724364744" y2="200.00000000000003" />
              <line x1="62.33864545764271" y1="279.47882010203847" x2="51.81506575573371" y2="114.44538832422585" />
              <line x1="39.064147724364744" y1="200.00000000000003" x2="51.81506575573371" y2="114.44538832422585" />
              <line x1="39.064147724364744" y1="200.00000000000003" x2="111.5092172972039" y2="46.729468357220185" />
              <line x1="51.81506575573371" y1="114.44538832422585" x2="111.5092172972039" y2="46.729468357220185" />
              <line x1="51.81506575573371" y1="114.44538832422585" x2="199.99999999999997" y2="66.85024342890162" />
              <line x1="111.5092172972039" y1="46.729468357220185" x2="199.99999999999997" y2="66.85024342890162" />
              <line x1="111.5092172972039" y1="46.729468357220185" x2="269.3633496631188" y2="79.85915420031266" />
              <line x1="199.99999999999997" y1="66.85024342890162" x2="269.3633496631188" y2="79.85915420031266" />
              <line x1="199.99999999999997" y1="66.85024342890162" x2="353.59865951999893" y2="111.31977257896283" />
              <line x1="269.3633496631188" y1="79.85915420031266" x2="353.59865951999893" y2="111.31977257896283" />
            </svg>
            <div className="since-text">
              <p>SINCE</p>
              <h1>1989</h1>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Only one excellence-section */}
      <div className="excellence-cards">
        {EXCELLENCE_CARDS.map((card, index) => (
          <div key={index} className="excellence-card">
            <div className="icon-wrapper">
              <i className={`fas ${card.icon}`}></i>
            </div>
            <h2>
              {card.value}
              <span>{card.label}</span>
            </h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Excellence;
