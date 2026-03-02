"use client";
import Image from "next/image";

export default function About() {
  return (
<section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
              I am a professional with <b>over 8 years</b> of experience in <b>Human Resources, Business Partnering, 
              General Affairs, and IT Development</b>. Innovative and results-driven professional with expertise in end-to-end recruitment, KPI implementation, GCG compliance, IT systems development, and server management. Skilled in delivering strategic solutions that optimize human resources, streamline business operations, and drive organizational performance.
            </p>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <Image
                  src="./assets/img/profile-img.jpg"
                  width={400}
                  height={400}
                  alt="Profile"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-8 content">
                <h2>Strategic HRGA and IT Development Professional</h2>
                <p className="py-1">

                </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>October 5, 1997</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Maritial:</strong> <span>Married</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+62 851 6941 6061</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Randudongkal, Pemalang - Jawa Tengah</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Informatics Engineering</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>rovu.ireiva25@gmail.com</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                            </ul>
                        </div>
                    </div>
                <p className="py-1">
                In the IT field, I am proficient in technologies such as HTML, PHP, JavaScript, Laravel, 
                Vue.js, and React, with extensive experience in database management systems like PostgreSQL, 
                MySQL, MongoDB, and more. I am also skilled in managing Virtual Private Servers (VPS) using 
                AWS, Google Cloud, and Proxmox, as well as operating systems such as Windows and Linux.
                </p>
                <p className="py-1">
                I have experience in End-to-End Recruitment, KPI development, Good Corporate Governance (GCG) 
                implementation, as well as training and career path development. Additionally, I have expertise 
                in SOP development, RAB creation, and overseeing both Human Resources and General Affairs, 
                along with technical IT project management.
                </p>
              </div>
            </div>
          </div>
        </section>


  );
}