import { useState } from "react";
import "./Homepage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/studcon_logo.avif";
import Mockphoto2 from "../../assets/images/mock_photo2.jpg";
import FramingIcon from "../../assets/icons/framing.png";
import PlasterIcon from "../../assets/icons/plaster.png";
import RepairIcon from "../../assets/icons/repair.png";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className="homepage">
        <div className="homepage__hero-container">
          <img src={Logo} className="homepage__hero-logo" alt="company logo" />
          <button className="homepage__hero-button">Free Estimate</button>
        </div>
        <div className="homepage__container homepage__about-container">
          <h1 className="homepage__about-title">About Us</h1>
          <img src={Mockphoto2} className="homepage__about-image" />
          <p className="homepage__about-text">
            At Studcon, we specialize in high-quality framing and drywall
            solutions tailored for today’s fast-paced construction demands. With
            a commitment to craftsmanship, safety, and efficiency, our
            experienced crew delivers clean, solid work that keeps your project
            moving forward. From custom homes to large-scale commercial builds,
            we bring structure and finish to every space — with no corners cut
            and no shortcuts taken.
          </p>
        </div>
        <div className="homepage__container homepage__services-container">
          <h1 className="homepage__services-title">Services</h1>
          <section className="homepage__services-cards">
            <div className="homepage__service-card">
              <img className="homepage__service-icon" src={FramingIcon} />
              <div className="homepage__service-info">
                <h2>Framing & Drywall Installation</h2>
                <p>
                  From new construction projects to remodels, our skilled team
                  ensures precision and efficiency in every framing and drywall
                  installation.
                </p>
              </div>
            </div>
            <div className="homepage__service-card">
              <img className="homepage__service-icon" src={PlasterIcon} />
              <div className="homepage__service-info">
                <h2>Drywall Repair</h2>
                <p>
                  Accidents happen, and when they do, we're here to restore your
                  walls to perfection. Trust us for seamless drywall repairs.
                </p>
              </div>
            </div>
            <div className="homepage__service-card">
              <img className="homepage__service-icon" src={RepairIcon} />
              <div className="homepage__service-info">
                <h2>Drywall Plaster</h2>
                <p>
                  Enhance the aesthetics of your interiors with our expert
                  drywall plaster services. We use premium materials for smooth
                  finishes that elevate your space!
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="homepage__container homepage__projects-container">
          <h1 className="homepage__projects-title">Projects</h1>
          <h2>Our Work Speaks for Itself</h2>
          <p className="homepage__projects-text">
            🏠 Modern Townhome Build – Coral Gables, FL Framing and drywall
            installation for a 10-unit luxury townhome development. Delivered
            ahead of schedule with precision finishing and soundproof party
            walls. 🏢 Commercial Office Renovation – Miami, FL Complete demo and
            reframe of interior partitions, including new drywall systems,
            fire-rated assemblies, and acoustic ceilings for a 5,000 sq ft
            office space. 🏬 Retail Build-Out – Wynwood, FL Framing and drywall
            for a high-end retail space featuring custom ceiling features,
            floating walls, and specialty finishes to meet branding
            requirements.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
