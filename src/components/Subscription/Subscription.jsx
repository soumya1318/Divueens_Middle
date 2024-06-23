import React, { useState, useEffect } from 'react';
import {
    sub_1,
    sub_2,
    sub_3,
    sub_4,
    ref_pic,
} from '../../assets/assets'
import './Subscription.css'


const Subscription = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = 4; // Update this according to the number of slides you have

    const changeSlide = (direction) => {
        const newIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
        setCurrentSlideIndex(newIndex);
    };

    const currentSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    const updateSlidePosition = () => {
        const slides = document.querySelector('.slides');
        const offset = -currentSlideIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
        // updateDots();
    };

    // const updateDots = () => {
    //     const dots = document.querySelectorAll('.dot');
    //     dots.forEach(dot => dot.classList.remove('active'));
    //     dots[currentSlideIndex].classList.add('active');
    // };

    useEffect(() => {
        updateSlidePosition();
        // updateDots();
    }, [currentSlideIndex]);



    const buyNow = (productName, productPrice) => {
        alert(`You have selected ${productName} for Rs. ${productPrice}/-`);
    };

    const seeAllProducts = () => {
        alert('Redirecting to all products page...');
    };

    const subscribe = () => {
        const email = document.querySelector('.contact-section input').value;
        if (email) {
            alert(`Thank you for subscribing with ${email}`);
        } else {
            alert('Please enter a valid email address');
        }


    };

    const renderDots = () => {
        return Array.from({ length: totalSlides }).map((_, index) => (
            <span
                key={index}
                className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
                onClick={() => currentSlide(index)}
            ></span>
        ));
    };

    return (
        <>
            <section className="Subscription">
                <div className="secondmain">
                    <div className="heading secondheading">
                        <hr className="hr-left" />
                        <h2>Exclusive Combos</h2>
                        <hr className="hr-right" />
                    </div>
                    <marquee>
                        <div className="notifi">
                            <h4 className="subheading">Exclusive Combos are Coming Soon....</h4>
                            <h4 className="subheading">Exclusive Combos are Coming Soon....</h4>
                            <h4 className="subheading">Exclusive Combos are Coming Soon....</h4>
                        </div>
                    </marquee>
                </div>

                <div className="slider">
                    <div className="slides">
                        {/* Slide 1 */}
                        <div className="slide">
                            <div className="item">
                                <img src={sub_1} alt="Beauty Combo 1" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_2} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_3} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_4} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>
                            {/* Repeat similar structure for each item */}
                        </div>

                        {/* Repeat similar structure for each slide */}
                        {/* Slide 2 */}
                        <div className="slide">
                            <div className="item">
                                <img src={sub_1} alt="Beauty Combo 1" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_2} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_3} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_4} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                        </div>

                        {/* Slide 3 */}
                        <div className="slide">
                            <div className="item">
                                <img src={sub_1} alt="Beauty Combo 1" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_2} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_3} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_4} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                        </div>
                        {/* Slide 4 */}
                        <div className="slide">
                            <div className="item">
                                <img src={sub_1} alt="Beauty Combo 1" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_2} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_3} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                            <div className="item">
                                <img src={sub_4} alt="Beauty Combo 2" />
                                <div style={{ display: 'flex' }}>
                                    <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button>
                                </div>
                            </div>

                        </div>

                        {/* end slide */}

                    </div>
                    <div className="navigation">
                        <button className="prev" onClick={() => changeSlide(-1)}>❮</button>
                        <button className="next" onClick={() => changeSlide(1)}>❯</button>
                    </div>
                    <div className="dots">

                        {
                            renderDots()
                        }
                        {/* <span className="dot" onClick={() => currentSlide(0)}></span>
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span> */}
                    </div>
                </div>


                <div className="see-all">
                    <button onClick={seeAllProducts}>See All</button>
                </div>
                <h2 className="" style={{ alignItems: 'center' }}>Refer your Friend</h2>
              
                <div className="refer-section">
                    <button style={{border:'none'}} className='image1'><a href="">
                    <img src={ref_pic} className="image1" alt="Refer a Friend" />
                        </a></button>
                </div>
                <div className="contact-section">
                    <h2 className="">Stay in Touch</h2>
                    <p style={{ paddingLeft: '30px' }}>Get latest beauty products on Email.</p>
                    <div className="contact-form">
                        <input type="email" placeholder="Your Email Address" style={{ border: 'solid 2px pink' }} />
                        <button onClick={subscribe} style={{ backgroundColor: 'pink' }}>Send</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Subscription
