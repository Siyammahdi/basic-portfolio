import Navbar from "./Navbar/Navbar";
import Banner from "./Sections/Banner/Banner";
import Background from "../assets/Background/background.jpg"
import BannerCards from "./Sections/BannerCards/BannerCards";
import About from "./Sections/About/About";
import Achievements from "./Sections/Achievements/Achievements";
import Skills from "./Sections/Skills/Skills";
import Services from "./Sections/Services/Services";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Home = () => {

    const [displayWidth, setDisplayWidth] = useState(0);
    console.log(displayWidth);

    useEffect(() => {
        const width = window.innerWidth;
        setDisplayWidth(width);

        if (width < 768) { // Adjust the breakpoint as needed
            Swal.fire({
                text:"It's better if you browse this site with computer or any large device",
            });
        }
    }, []);


    return (
        <div style={{backgroundImage:`url(${Background})`}}>
            <Navbar />
            <Banner />
            <BannerCards />
            <About />
            <Achievements />
            <Skills />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;