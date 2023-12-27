import Navbar from "./Navbar/Navbar";
import Banner from "./Sections/Banner/Banner";
import Background from "../assets/Background/background.jpg"
import BannerCards from "./Sections/BannerCards/BannerCards";
import About from "./Sections/About/About";

const Home = () => {
    return (
        <div style={{backgroundImage:`url(${Background})`}}>
            <Navbar />
            <Banner />
            <BannerCards />
            <About />
        </div>
    );
};

export default Home;