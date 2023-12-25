import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Shopify Dev', 'Wordpress Dev', 'Next UI/UX', 'React UI/UX', 'Python Django UI/UX', 'Bootstrap',];

export const Home = () => {
    const [visibleSections, setVisibleSections] = useState([]);
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
    const intro = useRef();
    const projectOne = useRef();
    const projectTwo = useRef();
    const projectThree = useRef();
    const details = useRef();

    useEffect(() => {
        const sections = [intro, projectOne, projectTwo, projectThree, details];

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target;
                        observer.unobserve(section);
                        if (visibleSections.includes(section)) return;
                        setVisibleSections(prevSections => [...prevSections, section]);
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
        );

        const indicatorObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollIndicatorHidden(!entry.isIntersecting);
            },
            { rootMargin: '-100% 0px 0px 0px' }
        );


        indicatorObserver.observe(intro.current);

        return () => {
            sectionObserver.disconnect();
            indicatorObserver.disconnect();
        };
    }, [visibleSections]);

    return (
        <div className={styles.home}>
            <Meta
                title="Designer + Developer"
                description="Design portfolio of Nitin Sharma."
            />
            <Intro
                id="intro"
                sectionRef={intro}
                disciplines={disciplines}
                scrollIndicatorHidden={scrollIndicatorHidden}
            />
            <section class="about-area" >
                <div class="container">
                    <div class="row">

                        <div class="col-md-6" data-aos="zoom-in">
                            <div class="about-me-box shadow-box">
                                <a class="overlay-link" href="about"></a>
                                <img src=" images/bg1.png" alt="BG" class="bg-img" />
                                <div class="img-box">
                                    <img src="/images/me.png" alt="About Me" />
                                </div>
                                <div class="infos">
                                    <h4>A WEB & SHOPIFY DEV.</h4>
                                    <h1>Nitin Sharma</h1>
                                    <p>Just Loving to work as Developer.</p>
                                    <a href="/about" class="about-btn">
                                        <img src=" images/icon.svg" alt="Button" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="about-credentials-wrap">
                                <div data-aos="zoom-in">
                                    <div class="banner shadow-box">
                                        <div class="marquee">
                                            <div>
                                                <span> <b>hootyballoo.com</b> <img src=" images/star1.svg" alt="Star" />
                                                    <b>elementssupply.com</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                                                    <b>italiving.de</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                                                     <b>rousefit.com</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                                                     <b>manonsimard-boutique.com</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                    <b>herronapparel.com</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                    <b>manonsimard-boutique.com</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                    <b>paolopanini.com</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                    <b>starlitmotors.co.uk</b>
                                                    <img src=" images/star1.svg" alt="Star" />
                                                    

                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="gx-row d-flex gap-24">
                                    <div data-aos="zoom-in">
                                        <div class="about-crenditials-box info-box shadow-box h-full">
                                            <a class="overlay-link" href="credentials"></a>
                                            <img src=" images/bg1.png" alt="BG" class="bg-img" />
                                            <img src=" images/sign.png" alt="Sign" />
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="infos">
                                                    <h4>more about me</h4>
                                                    <h1>Credentials</h1>
                                                </div>

                                                <a href="credentials" class="about-btn">
                                                    <img src=" images/icon.svg" alt="Button" />
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="zoom-in">
                                        <div class="about-project-box info-box shadow-box h-full">
                                            <a class="overlay-link" href="works"></a>
                                            <img src=" images/bg1.png" alt="BG" class="bg-img" />
                                            <img src=" images/my-works.png" alt="My Works" />
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="infos">
                                                    <h4>SHOWCASE</h4>
                                                    <h1>Projects</h1>
                                                </div>

                                                <a href="works" class="about-btn">
                                                    <img src=" images/icon.svg" alt="Button" />
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="row mt-24 align-items-center">
                        <div class="col-md-6" data-aos="zoom-in">

                            <div class="about-client-box info-box shadow-box">
                                <img src=" images/bg1.png" alt="BG" class="bg-img" />
                                <div class="clients d-flex align-items-start gap-24 justify-content-center">
                                    <div class="client-item">
                                        <h1>2.5 +</h1>
                                        <p>Years <br />Experience</p>
                                    </div>



                                    <div class="client-item">
                                        <h1>54 +</h1>
                                        <p>Total <br />Projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6" data-aos="zoom-in">

                            <div class="about-contact-box info-box shadow-box">
                                <a class="overlay-link" href="contact"></a>
                                <img src=" images/bg1.png" alt="BG" class="bg-img" />
                                <img src=" images/icon2.png" alt="Icon" class="star-icon" />
                                <h1>Let's <br />work <span>together.</span></h1>
                                <h5 className='mt-2'>shnitin8010@gmail.com</h5>
                                <a href="contact" class="about-btn">
                                    <img src=" images/icon.svg" alt="Button" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};
