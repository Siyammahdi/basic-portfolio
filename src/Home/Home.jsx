import Navbar from "./Navbar/Navbar";
import Banner from "./Sections/Banner/Banner";
import Background from "../assets/Background/background.jpg"
import BannerCards from "./Sections/BannerCards/BannerCards";
import About from "./Sections/About/About";
import Achievements from "./Sections/Achievements/Achievements";

const Home = () => {
    return (
        <div style={{backgroundImage:`url(${Background})`}}>
            <Navbar />
            <Banner />
            <BannerCards />
            <About />
            <Achievements />
        </div>
    );
};

export default Home;