
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
                                    <img src="/images/me.png" alt="About Me" />
                                </div>
                            </div>
                        </div>

                        <div class="about-details" data-aos="zoom-in">
                            <h1 class="section-heading" data-aos="fade-up"><img src=" /images/star-2.png" alt="Star" /> Self-summary <img src=" /images/star-2.png" alt="Star" /></h1>
                            <div class="about-details-inner shadow-box">
                                <img src=" /images/icon2.png" alt="Star" />
                                <h1>Nitin Sharma</h1>
                                <p>A Shopify Engineer from Uttar Pradesh, India, with 3.5+ years of experience in Shopify design and development.</p>
                                <p>Currently, I’m shaping next-level eCommerce at ENS Enterprises, India’s top-ranked Shopify Plus Partner company. Here, I not only develop cutting-edge Shopify solutions but also mentoring a squad of junior developers while managing direct client interactions.</p>
                            </div>

                        </div>
                    </div>


                    <div class="about-details mt-4" data-aos="zoom-in">
                        <div class=" p-5 shadow-box">
                            <p>A Shopify Engineer with a strong foundation in Shopify design and development, backed by a BSc in IT and a Diploma in Graphic, Web, and Digital Marketing. My journey in web development started with Shopify and WordPress, but my passion for coding pushed me to explore deeper into React, Next.js, Django, PHP, and UI/UX design tools like Figma, Photoshop, and Illustrator.</p>
                            <br /> <p>However, as I evolved in my career, I realized that Shopify development is my true calling. The challenge, the demand, and the lack of structured learning resources made it an exciting field to master. Self-learning and persistence led me to gain expertise in Shopify's core functionalities, including Theme Development, Custom App Development, Checkout UI, API integrations, and performance optimization.</p>
                            <br /> <p>In my free time, I enjoy staying up-to-date with the latest developments in the tech world and exploring new coding techniques to enhance my abilities. I am a team player and believe in fostering a positive and collaborative work environment.</p>
                            <br /> <p>I started my professional journey at Epic Web Techno, where I gained valuable experience and mentorship. After 1.4 years, circumstances led me to EG Logics, but I soon realized I needed more challenging projects to fuel my growth. That’s when I took a leap and joined ENS Enterprises—India’s #1 Shopify Plus Partner company—where I now work as a Shopify Engineer, leading a team of 4-5 junior developers, handling complex projects, and directly collaborating with clients.</p>

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
                                        <p class="date">August 2022 - Sep 2023</p>
                                        <h2>Epic Web Techno </h2>
                                        <p class="type">Shopify and Wordpress Developer</p>
                                    </li>
                                    <li>
                                        <p class="date">Sep 2023 - June 2024</p>
                                        <h2>EG Logics Pvt. Ltd.</h2>
                                        <p class="type">Shopify Developer</p>
                                    </li>
                                    <li>
                                        <p class="date">June 2024 - Present</p>
                                        <h2>ENS Enterprises Pvt. Ltd.</h2>
                                        <p class="type">Shopify Engineer ( DevOps Team )</p>
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
                                    <li>
                                        <p class="date">Sep 2024 - Sep 2025</p>
                                        <h2>Certification on Shopify Development Fundamentals Assessment</h2>
                                        <p class="type">Shopify Academy</p>
                                    </li>
                                    <li>
                                        <p class="date">Sep 2024 - Sep 2025</p>
                                        <h2>Certification on Shopify Development Fundamentals Assessment</h2>
                                        <p class="type">Shopify Academy</p>
                                    </li>
                                    <li>
                                        <p class="date">Sep 2024 - Present</p>
                                        <h2>Full Stack Development ( Exploring Node, React, Next, Postgrey, MongoDB, GraphQLAPI, RestAPI, Express.js, React Native, GCP, AWS)</h2>
                                        <p class="type">Self Learning</p>
                                    </li>
                                    <li>
                                        <p class="date">June 2025 - June 2027</p>
                                        <h2>Masters in B.sc ( I.T )</h2>
                                        <p class="type">Amity University</p>
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
                                        <a class="overlay-link" href="mailto:shnitin8010@gmail.com"></a>
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

