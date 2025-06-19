import { useEffect, useRef, useState } from "react";
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
import SecondVideo from "../../assets/videos/STUDCON 1_FINAL.mp4";

const galleryImages = [SpaImage1, SpaImage2, SpaImage3, SpaImage4, SpaImage5];

export default function Homepage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const goPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

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
          <div className="homepage__about-content">
            <div className="homepage__about-design">
              <img src={TruckPhoto} className="homepage__about-image" />
            </div>
            <div className="homepage__about-info">
              <h1 className="homepage__about-title" id="about">
                ABOUT US
              </h1>
              <p className="homepage__about-text">
                At <strong>Studcon</strong>, we specialize in high-quality{" "}
                <strong>framing</strong> and <strong>drywall</strong> solutions
                tailored for today’s fast-paced construction demands. With a
                commitment to craftsmanship, safety, and efficiency, our
                experienced crew delivers clean, solid work that keeps your
                project moving forward. From custom homes to large-scale
                commercial builds, we bring structure and finish to every space
                — with no corners cut and no shortcuts taken.
              </p>
              <a className="homepage__about-button" href="#contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="homepage__video-container">
          <video
            ref={videoRef}
            className="homepage__secondary-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={SecondVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="homepage__video-overlay">
            <h1 className="homepage__video-title">
              Your trusted drywall and framing experts
            </h1>
          </div>
        </div>
        <div
          className="homepage__container homepage__services-container"
          id="services"
        >
          <div className="homepage__services-background">
            <h1 className="homepage__services-title">OUR SERVICES</h1>
          </div>
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
          <div className="homepage__projects-background">
            <h1 className="homepage__projects-title" id="projects">
              PROJECTS
            </h1>
          </div>
          <div className="homepage__gallery-grid">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`project ${idx + 1}`}
                className="homepage__gallery-image"
                onClick={() => openModal(idx)}
              />
            ))}
          </div>

          {isModalOpen && (
            <div className="homepage__modal-overlay" onClick={closeModal}>
              <div
                className="homepage__modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={goPrev} className="homepage__modal-nav">
                  &#8592;
                </button>
                <img
                  src={galleryImages[currentIndex]}
                  alt={`modal ${currentIndex + 1}`}
                  className="homepage__modal-image"
                />
                <button onClick={goNext} className="homepage__modal-nav">
                  &#8594;
                </button>
                <button onClick={closeModal} className="homepage__modal-close">
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="homepage__container homepage__contact-container">
          <div className="homepage__title-background">
            <h1 className="homepage__contact-title" id="contact">
              CONTACT US
            </h1>
          </div>

          <div className="homepage__contact-section">
            <div className="homepage__contact-form">
              <ContactForm />
            </div>
            <div className="homepage__contact-info">
              <div className="homepage__contact-background">
                <div className="homepage__contact-text">
                  <p>
                    <strong>Studcon Drywall & Framing</strong>
                  </p>
                  <p>(786) 689-8522</p>
                  <p>estimates@studcon.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
