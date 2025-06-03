import { useState } from "react";
import "./Homepage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Mockphoto1 from "../../assets/images/mock_photo1.webp";
import Mockphoto2 from "../../assets/images/mock_photo2.jpg";
import Mockphoto3 from "../../assets/images/mock_photo3.jpeg";

export default function Homepage() {
  const slides = [Mockphoto1, Mockphoto2, Mockphoto3];
  const captions = ["Caption Text", "Caption Two", "Caption Three"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const plusSlides = (n) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + n + slides.length) % slides.length
    );
  };

  const currentSlide = (n) => {
    setCurrentIndex(n);
  };

  return (
    <>
      <Navbar />
      <main className="homepage">
        <div className="homepage__slideshow">
          {slides.map((photo, index) => (
            <div
              key={index}
              className={`homepage__slide ${
                index === currentIndex ? "homepage__slide--active" : ""
              }`}
            >
              <img
                className="homepage__slide-image"
                src={photo}
                alt={`Slide ${index + 1}`}
              />
              <div className="homepage__caption">{captions[index]}</div>
            </div>
          ))}

          <button
            className="homepage__nav-button homepage__nav-button--prev"
            onClick={() => plusSlides(-1)}
          >
            &#10094;
          </button>
          <button
            className="homepage__nav-button homepage__nav-button--next"
            onClick={() => plusSlides(1)}
          >
            &#10095;
          </button>
        </div>

        <div className="homepage__dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`homepage__dot ${
                index === currentIndex ? "homepage__dot--active" : ""
              }`}
              onClick={() => currentSlide(index)}
            ></span>
          ))}
        </div>

        <div className="homepage__text-block">
          <h1 className="homepage__headline">Welcome to Studcon</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
