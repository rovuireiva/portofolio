"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Typed from "typed.js";

export default function Hero() {
      const typedRef = useRef<HTMLSpanElement | null>(null);
      useEffect(() => {
        // Typed.js
        const typed = new Typed(typedRef.current!, {
          strings: [" Human Resources Generalis", " Human Resources Business Partner", "IT Fullstack Developer", " General Affair Expert"],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        });
        if (typedRef.current) {
        typedRef.current.setAttribute("translate", "no");
        }
    }, []);
    return(
        <section id="hero" className="hero section light-background">
          <Image
            src="/public/assets/img/hero-bg.jpg"
            alt="Hero Background"
            fill
            priority
          />

          <div className="container" data-aos="zoom-out">
            <div className="row justify-content-center">
              <div className="col-lg-9" translate="no">
                <h2>Rovu A. S. Ireiva</h2>
                <p>
                  I'm <span ref= {typedRef}></span>
                </p>

                <div className="social-links">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
