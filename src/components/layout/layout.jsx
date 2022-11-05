import React, { Fragment } from "react";
import Header from "../header/header";

import HeroSection from "../hero-section/hero-section"
import About from "../about/about";
import Experience from "../experience/experience";
import Portfolio from "../portfolio/portfolio";
import Testimonials from "../testimonial/testimonial";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

const Layout = () => {
    return (
    <Fragment>
        <Header />
        <HeroSection />
        <About />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </Fragment>
        
    );
}

export default Layout