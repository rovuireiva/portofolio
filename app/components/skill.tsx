"use client";

import { useState, useEffect } from "react";

type Skill = {
  id: number;
  category: "hrd" | "ga" | "it";
  name: string;
  percent: number;
};

const skillsData: Skill[] = [
  { id: 1, category: "hrd", name: "End to End Recruitment", percent: 90 },
  { id: 2, category: "hrd", name: "Compensation, Benefit and Payroll", percent: 95 },
  { id: 3, category: "hrd", name: "Key Perfomance Indicator", percent: 90 },
  { id: 4, category: "hrd", name: "BPJS knowledge and management", percent: 90},
  { id: 5, category: "hrd", name: "HR Policies, Procedures and Tax pph21", percent: 90 },
  { id: 6, category: "hrd", name: "HR System, Record and On-Boarding", percent: 97 },
  { id: 7, category: "ga", name: "Administration and Filing", percent: 97 },
  { id: 8, category: "ga", name: "Inventory", percent: 97 },
  { id: 9, category: "ga", name: "Company Work Plan and Budget", percent: 90 },
  { id: 10, category: "ga", name: "Workspace and Facilities Maintenance", percent: 96 },
  { id: 11, category: "ga", name: "Asset Management, Vehicle Maintenance and Business Travel", percent: 90 },
  { id: 12, category: "it", name: "Infrastructure and Networking", percent: 100 },
  { id: 13, category: "it", name: "Help Desk", percent: 98 },
  { id: 14, category: "it", name: "Frontend (React, Next, Vue, php, html, css)", percent: 96 },
  { id: 15, category: "it", name: "Backend (Laravel, CodeIgniter, Django)", percent: 96 },
  { id: 16, category: "it", name: "DevOps", percent: 87},
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<"*" | "hrd" | "ga" | "it">("*");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredSkills =
    activeFilter === "*" ? skillsData : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section className="skills section" style={{ padding: "1rem 0" }}>
      <div className="container section-title" style={{ textAlign: "center", marginBottom: "0rem" }}>
        <h2>Skills</h2>
        <p>Skill sets grouped by categories</p>
      </div>

      {/* Filter Menu */}
      <ul
        className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100"
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          listStyle: "none",
          padding: 0,
          marginBottom: "1rem",
          userSelect: "none",
        }}
      >
        {["*", "hrd", "ga", "it"].map((filter) => (
          <li
            key={filter}
            onClick={() => setActiveFilter(filter as any)}
            style={{
              cursor: "pointer",
              padding: "6px 18px",
              borderRadius: "20px",
              fontWeight: 600,
              backgroundColor: activeFilter === filter ? "#0d6efd" : "#f1f1f1",
              color: activeFilter === filter ? "#fff" : "#333",
              border: activeFilter === filter ? "1px solid #0d6efd" : "1px solid transparent",
              textTransform: filter === "*" ? "none" : "uppercase",
              fontSize: "0.9rem",
              userSelect: "none",
            }}
          >
            {filter === "*" ? "All" : filter.toUpperCase()}
          </li>
        ))}
      </ul>

      {/* Skills Grid */}
      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {filteredSkills.map(({ id, name, percent }) => (
          <div
            key={id}
            className="skill-item"
            style={{
              padding: "0.5rem 1rem",
            }}
          >
            {/* Label + percent */}
            <div
              className="skill-label"
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600",
                fontSize: "0.9rem",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <span>{name}</span>
              <span>{percent}%</span>
            </div>

            {/* Progress bar */}
            <div
              className="progress-bar-wrap"
              style={{
                backgroundColor: "#e9ecef",
                borderRadius: "10px",
                height: "3px",
                overflow: "hidden",
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{
                  width: animate ? `${percent}%` : "0%",
                  height: "100%",
                  backgroundColor: "#0d6efd",
                  borderRadius: "10px",
                  transition: "width 2s ease-in-out",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}