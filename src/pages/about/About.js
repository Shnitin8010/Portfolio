
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { useRef, useState } from 'react';

export const About = () => {
    const errorRef = useRef();






    return (
        <div style={{ paddingLeft: '12%' }}>
            <Meta
                title="About"
                description="About me and my work all is their."
            />
            <section class="about-area">
                <div class="container">
                    <div class="d-flex about-me-wrap align-items-start  ">
                        <div data-aos="zoom-in">
                            <div class="about-image-box shadow-box">
                                <img src="/images/bg1.png" alt="BG" class="bg-img" />
                                <div class="image-inner">
                                    <img src="/images/me2.png" alt="About Me" />
                                </div>
                            </div>
                        </div>

                        <div class="about-details" data-aos="zoom-in">
                            <h1 class="section-heading" data-aos="fade-up"><img src=" /images/star-2.png" alt="Star" /> Self-summary <img src=" /images/star-2.png" alt="Star" /></h1>
                            <div class="about-details-inner shadow-box">
                                <img src=" /images/icon2.png" alt="Star" />
                                <h1>Nitin Sharma</h1>
                                <p>Hello, my name is Nitin Sharma. I currently reside in Chipiyana, Greater Noida. Professionally, I am working at Epic Web Techno, where I hold the role of a Shopify and WordPress developer. I am passionate about web development and have expertise in designing user interfaces using technologies like Next.js and React.</p>

                            </div>

                        </div>
                    </div>


                    <div class="about-details mt-4" data-aos="zoom-in">
                        <div class=" p-5 shadow-box">
                            <p>My main focus is on seeking opportunities that align with my skills and interests while also benefiting the organization I will be working with. I believe in contributing my knowledge and expertise to create meaningful and impactful projects. I am eager to grow as a developer and continue expanding my skill set to stay up-to-date with the latest trends and technologies in the industry.</p>
                            <br /> <p>I am committed to delivering high-quality work, meeting deadlines, and collaborating effectively with teams to achieve common goals. As a developer, I value continuous learning and always strive to find innovative solutions to challenges that arise during the development process.</p>
                            <br /> <p>In my free time, I enjoy staying up-to-date with the latest developments in the tech world and exploring new coding techniques to enhance my abilities. I am a team player and believe in fostering a positive and collaborative work environment.</p>
                            <br /> <p>I am open to new opportunities that allow me to apply my expertise in web development and UI design, and I am excited to contribute my skills to the success of both my personal growth and the organization I will be a part of.</p>

                        </div>

                    </div>


                    <div class="row mt-24">
                        <div class="col-md-6" data-aos="zoom-in">
                            <div class="about-edc-exp about-experience shadow-box">
                                <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                <h3>EXPERIENCE</h3>

                                <ul>
                                    <li>
                                        <p class="date">Jan 2022- June 2022 (Paid Internship)</p>
                                        <h2>Kantech Designer and Printers</h2>
                                        <p class="type">Graphic Designer</p>
                                    </li>
                                    <li>
                                        <p class="date">August 2022 - Present</p>
                                        <h2>Epic Web Techno </h2>
                                        <p class="type">Website Designer and Developer</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6" data-aos="zoom-in">
                            <div class="about-edc-exp about-education shadow-box">
                                <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                <h3>EDUCATION</h3>

                                <ul>
                                    <li>
                                        <p class="date">2021 - 2024</p>
                                        <h2>B.Sc ( Information Technology)</h2>
                                        <p class="type">Avviare Educational Hub</p>
                                    </li>
                                    <li>
                                        <p class="date">May 2021 - Dec 2022</p>
                                        <h2>Diploma in Graphic , Web & Digital Marketing</h2>
                                        <p class="type">National Institute of Professional Studies</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-24">
                        <div class="col-md-12 col-sm-12">
                            <div class="d-flex profile-contact-credentials-wrap gap-24">


                                <div data-aos="zoom-in" class="flex-1">
                                    <div class="about-contact-box info-box shadow-box">
                                        <a class="overlay-link" href="contact"></a>
                                        <img src=" /images/bg1.png" alt="BG" class="bg-img" />
                                        <img src=" /images/icon2.png" alt="Icon" class="star-icon" />
                                        <h2>Let's <br />work <span>together.</span></h2>
                                        <h5>+91 9717818501</h5>
                                        <h5>shnitin8010@gmail.com</h5>

                                        <a href="contact" class="about-btn">
                                            <img src=" /images/icon.svg" alt="Button" />
                                        </a>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

