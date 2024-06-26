import React, { useEffect, useState } from "react";
import "./Banner.css";
import { banner } from "../../assets/assets.js";

const Banner = () => {
  // console.log(banner, 'banner')
  const [currentBannerSlideIndex, setCurrentBannerSlideIndex] = useState(0);
  const totalSlides = 4; // Update this according to the number of slides you have

  const changeBannerSlide = (direction) => {
    const newIndex =
      (currentBannerSlideIndex + direction + totalSlides) % totalSlides;
    setCurrentBannerSlideIndex(newIndex);
  };

  const updateBannerSlidePosition = () => {
    const slides = document.querySelector(".banner-slides");
    const offset = -currentBannerSlideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
    // updateDots();
  };

  // const updateDots = () => {
  //     const dots = document.querySelectorAll('.dot');
  //     dots.forEach(dot => dot.classList.remove('active'));
  //     dots[currentSlideIndex].classList.add('active');
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      changeBannerSlide(1); // Move to the next slide
    }, 3000); // Change slide every 3 seconds
    updateBannerSlidePosition();

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentBannerSlideIndex]); // Add currentSlideIndex as a dependency

  return (
    <>
      <h2 className="primary"> Welcome to Divueens</h2>
      <section className="banner">
        <div className="banner-slider">
          <div className="banner-slides">
            {/* Slide 1 */}
            {banner.map((item, index) => (
              <div key={index} className="banner-slide">
                <div key={index} className="banner-image">
                  <img src={item} alt={`Beauty Combo ${index}`} />
                </div>
              </div>
            ))}
            {/* end slide */}
          </div>

          {/* <div className="banner-navigation">
            <button className="prev" onClick={() => changeBannerSlide(-1)}>
              ❮
            </button>
            <button className="next" onClick={() => changeBannerSlide(1)}>
              ❯
            </button>
          </div>     */}

          <div className="banner-dots">
            {banner.map((_, index) => {
                return (
                    <div
                    key={index}
                    onClick={() => setCurrentBannerSlideIndex(index)}
                    className={`banner-dot ${currentBannerSlideIndex === index ? "active" : ""}`}
                    ></div>
                )
            })} 
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
