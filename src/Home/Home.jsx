import Navbar from "./Navbar/Navbar";
import Banner from "./Sections/Banner/Banner";
import Background from "../assets/Background/background.jpg"
import BannerCards from "./Sections/BannerCards/BannerCards";
import About from "./Sections/About/About";
import Achievements from "./Sections/Achievements/Achievements";
import Skills from "./Sections/Skills/Skills";
// import { useState } from "react";

const Home = () => {

    // const [displayWidth, setDisplayWidth] = useState(0);
    // const width = window.innerWidth;
    // setDisplayWidth(width)
    
    // if(displayWidth < 0){
    //     alert("Open in a laptop or desktop for better result")
    // }


    return (
        <div style={{backgroundImage:`url(${Background})`}}>
            <Navbar />
            <Banner />
            <BannerCards />
            <About />
            <Achievements />
            <Skills />
        </div>
    );
};

export default Home;