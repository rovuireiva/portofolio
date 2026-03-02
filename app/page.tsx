"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skill";
import Resume from "./components/resume";
import Hero from "./components/hero";
import Sertificate from "./components/sertificates";


export default function HomePage() {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nextJsVersion, setNextJsVersion] = useState("");
  const [turbopackVersion, setTurbopackVersion] = useState("");

  useEffect(() => {
    // Typed.js

    // AOS
    AOS.init({
      duration: 800,
      once: true,
    });

    // Scroll detection
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Preloader
    const handleLoad = () => {
      setLoading(false);
    };
     setLoading(false);

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleLoad);
    };

        // Menampilkan versi Next.js dari package.json
    const nextJsPackage = require("next/package.json");
    setNextJsVersion(nextJsPackage.version);

    // Menampilkan versi Turbopack dari package.json (jika ada)
    const turbopackPackage = require("turbopack/package.json");
    setTurbopackVersion(turbopackPackage.version);
  }, []);

  

  return (
    <>
      <Header/>

      <main className="main">

        <Hero/>
        <About/>
        <Skills/>
        <Resume/>
        <Sertificate/>
      </main>

      {/* FOOTER */}
  <footer id="footer" className="footer position-relative light-background">

      <div className="container">
        <div className="copyright">
          <span>Copyright</span> <strong className="px-1 sitename">Rovu A. S. Ireiva</strong> <span>All Rights Reserved</span>
        </div>
        <div className="credits">
        <p>
          Designed with <span style={{ fontWeight: "bold", color: "#007bff" }}>Next.js {nextJsVersion}</span> and <span style={{ fontWeight: "bold", color: "#007bff" }}>Turbopack {turbopackVersion}</span>
        </p>
        </div>
      </div>

  </footer>

      {/* Preloader */}
      {loading && <div id="preloader"></div>}
    </>
  );
}