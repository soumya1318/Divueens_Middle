import React, { useEffect, useState } from 'react'
// import './banner.js'
import { banner } from '../../assets/assets.js'


const Banner = () => {
    // console.log(banner, 'banner')
    const [currentBannerSlideIndex, setCurrentBannerSlideIndex] = useState(0);
    const totalSlides = 4; // Update this according to the number of slides you have

    const changeBannerSlide = (direction) => {
        const newIndex = (currentBannerSlideIndex + direction + totalSlides) % totalSlides;
        setCurrentBannerSlideIndex(newIndex);
    };

    const currentBannerSlide = (index) => {
        setCurrentBannerSlideIndex(index);
    };

    const updateBannerSlidePosition = () => {
        const slides = document.querySelector('.slides');
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
            <h2 className='primary'> Welcome to Divueens</h2>
            <section className="banner">
                <div className="banner-slider">
                    <div className="slides">
                        {/* Slide 1 */}

                        {
                            banner.map((item, index) => (
                                <div key={index} className="slide">
                                    <div className="banner-image">
                                    <img src={item} alt="Beauty Combo 1" />
                                    </div>
                                </div>

                            ))
                        }
         

                        {/* end slide */}

                    </div>
                    <div className="navigation">
                        <button className="prev" onClick={() => changeBannerSlide(-1)}>❮</button>
                        <button className="next" onClick={() => changeBannerSlide(1)}>❯</button>
                    </div>
                    {/* <div className="banner-button">
            <button style={{
                color:'#ffff',
                backgroundColor:'#000',
                borderRadius:'10px',
                position:'absolute',
                bottom:'60px',
                left:'30px',
                padding:'.5rem 1rem'


            }} id="banner-button">Join Now</button>
            </div> */}
                </div>
            </section>

        </>
    )
}
 export default Banner