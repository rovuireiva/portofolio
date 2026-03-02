"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: "hero", icon: "bi-house", label: "Home" },
    { id: "about", icon: "bi-person", label: "About" },
    { id: "resume", icon: "bi-file-earmark-text", label: "Resume" },
  ];

  return (
    <>
      <header
        id="header"
        className="header d-flex flex-column justify-content-center"
      >
        {/* Toggle Button */}
        <i
          className="header-toggle d-xl-none bi bi-list"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ cursor: "pointer" }}
        ></i>

        <nav
          id="navmenu"
          className={`navmenu ${mobileOpen ? "mobile-open" : ""}`}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={() => setMobileOpen(false)} // auto close saat klik
                >
                  <i className={`bi ${item.icon} navicon`}></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Tambahan CSS Responsive */}
      <style jsx>{`
        /* ===== MOBILE ===== */
        @media (max-width: 1199px) {
          .navmenu {
            position: fixed;
            top: 0;
            right: -150px;
            width: 150px;
            height: 100vh;
            background: white;
            padding-top: 80px;
            transition: 0.3s;
            z-index: 9999;
          }

          .navmenu.mobile-open {
            right: 0;
          }

          .navmenu ul {
            flex-direction: column;
            padding: 0 20px;
          }

          .navmenu ul li {
            margin-bottom: 20px;
          }

          .navmenu ul li a {
            display: flex;
            align-items: center;
            font-size: 14px;
          }

          .header-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            font-size: 28px;
            z-index: 10000;
            color: white;
          }
        }

 
      `}</style>
    </>
  );
}