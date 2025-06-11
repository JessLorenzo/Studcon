import { useState } from "react";
import "./Homepage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import TruckPhoto from "../../assets/images/studcon_truck.JPG";
import FramingIcon from "../../assets/icons/framing.png";
import PlasterIcon from "../../assets/icons/plaster.png";
import RepairIcon from "../../assets/icons/repair.png";
import SpaImage1 from "../../assets/images/spa_project1.jpg";
import SpaImage2 from "../../assets/images/spa_project2.jpg";
import SpaImage3 from "../../assets/images/spa_project3.jpg";
import SpaImage4 from "../../assets/images/spa_project4.jpg";
import SpaImage5 from "../../assets/images/spa_project5.jpg";
import HeroVideo from "../../assets/videos/MEMORIAL_1.mp4";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className="homepage">
        <div className="homepage__hero-container">
          <video
            className="homepage__hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="homepage__container homepage__about-container">
          <h1 className="homepage__about-title" id="about">
            ABOUT US
          </h1>
          <div className="homepage__about-content">
            <img src={TruckPhoto} className="homepage__about-image" />
            <p className="homepage__about-text">
              At Studcon, we specialize in high-quality framing and drywall
              solutions tailored for today’s fast-paced construction demands.
              With a commitment to craftsmanship, safety, and efficiency, our
              experienced crew delivers clean, solid work that keeps your
              project moving forward. From custom homes to large-scale
              commercial builds, we bring structure and finish to every space —
              with no corners cut and no shortcuts taken.
            </p>
          </div>
        </div>
        <div
          className="homepage__container homepage__services-container"
          id="services"
        >
          <h1 className="homepage__services-title">SERVICES</h1>
          <section className="homepage__services-cards">
            <div className="homepage__service-card">
              <img
                className="homepage__service-icon"
                src={FramingIcon}
                alt="Framing icon"
              />
              <div className="homepage__service-info">
                <h2 className="homepage__service-subtitle">
                  Framing & Drywall Installation
                </h2>
                <p className="homepage__service-text">
                  From new construction projects to remodels, our skilled team
                  ensures precision and efficiency in every framing and drywall
                  installation.
                </p>
              </div>
            </div>
            <div className="homepage__service-card">
              <img
                className="homepage__service-icon"
                src={PlasterIcon}
                alt="Plaster icon"
              />
              <div className="homepage__service-info">
                <h2 className="homepage__service-subtitle">Drywall Repair</h2>
                <p className="homepage__service-text">
                  Accidents happen, and when they do, we're here to restore your
                  walls to perfection. Trust us for seamless drywall repairs.
                </p>
              </div>
            </div>
            <div className="homepage__service-card">
              <img
                className="homepage__service-icon"
                src={RepairIcon}
                alt="Repair icon"
              />
              <div className="homepage__service-info">
                <h2 className="homepage__service-subtitle">Drywall Plaster</h2>
                <p className="homepage__service-text">
                  Enhance the aesthetics of your interiors with our expert
                  drywall plaster services. We use premium materials for smooth
                  finishes that elevate your space!
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="homepage__container homepage__projects-container">
          <h1 className="homepage__projects-title" id="projects">
            PROJECTS
          </h1>
          <div className="homepage__projects-gallery">
            <img
              className="homepage__projects-image"
              src={SpaImage1}
              alt="spa beds"
            />
            <img
              className="homepage__projects-image"
              src={SpaImage2}
              alt="spa entrance"
            />
            <img
              className="homepage__projects-image"
              src={SpaImage3}
              alt="spa shelves"
            />
            <img
              className="homepage__projects-image"
              src={SpaImage4}
              alt="spa entrance"
            />
            <img
              className="homepage__projects-image"
              src={SpaImage5}
              alt="spa room"
            />
          </div>
        </div>
        <div className="homepage__container homepage__contact-container">
          <h1 className="homepage__contact-title" id="contact">
            CONTACT US
          </h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
