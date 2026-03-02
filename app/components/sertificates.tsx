"use client";

export default function Certifications() {
  const certifications = [
    {
      title: "Administration and Filling Skill",
      subtitle: "PT Lutan Edukasi",
      colorClass: "item-cyan",
    },
    {
      title: "Pembinaan Pengawasan Norma Keselamatan dan Keselamatan Kerja",
      subtitle: "PT Intranusa Indonesia",
      colorClass: "item-orange",
    },
    {
      title: "Pendidikan Pelatihan Kesemaptaan",
      subtitle: "PUSDIKZI KODIKLAT AD",
      colorClass: "item-teal",
    },
    {
      title: "Sistem Management Lingkungan ISO 14001-2015",
      subtitle: "PT Fresh Galang Mandiri",
      colorClass: "item-red",
    },
    {
      title: "Pembinaan Keselamatan dan Kesehatan Kerja (K3) di Bidang Pertolongan Pertama pada Kecelakaan di Tempat Kerja",
      subtitle: "PT Upaya Riksa Patra",
      colorClass: "item-indigo",
    },
    {
      title: "Teknik Pengamanan Maximum Server Ubuntu 24.04",
      subtitle: "PT Teknologi Server Indonesia (xcode)",
      colorClass: "item-pink",
    },
    {
      title: "Proxmox Virtual Environment (Proxmox VE) untuk Kebutuhan Server",
      subtitle: "PT Teknologi Server Indonesia (xcode)",
      colorClass: "item-cyan",
    },
  ];

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Certifications</h2>
        <p>
I have successfully completed a variety of professional training programs and certifications, focusing on enhancing my skills in areas such as Human Resource Management, IT Development, Project Management, and various technical fields. These certifications have equipped me with a comprehensive understanding of industry best practices, enabling me to implement effective solutions and drive continuous improvement within organizations.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {certifications.map(({ title, subtitle, colorClass }, idx) => (
            <div
              key={idx}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
            >
              <div
                className={`service-item ${colorClass} position-relative`}
                style={{
                  padding: "30px",
                  borderRadius: "8px",
                  boxShadow:
                    "0 4px 8px rgb(0 0 0 / 0.05), 0 8px 24px rgb(0 0 0 / 0.1)",
                  backgroundColor: "#fff",
                  transition: "background-color 0.3s ease", // Make sure transition works
                }}
              >
                {/* Now subtitle goes on top and title below */}
                <h3>{subtitle}</h3>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-item {
          cursor: pointer;
          background-color: #ffffff;
          transition: background-color 0.3s ease;
        }

        .item-cyan:hover {
          background-color: #a2d5f2; /* Light cyan color */
        }
        .item-orange:hover {
          background-color: #f7b267; /* Light orange color */
        }
        .item-teal:hover {
          background-color: #76c7c0; /* Light teal color */
        }
        .item-red:hover {
          background-color: #f28b82; /* Light red color */
        }
        .item-indigo:hover {
          background-color: #9fa8da; /* Light indigo color */
        }
        .item-pink:hover {
          background-color: #f48fb1; /* Light pink color */
        }
      `}</style>
    </section>
  );
}