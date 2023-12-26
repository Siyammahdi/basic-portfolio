import Navbar from "./Navbar/Navbar";
import Banner from "./Sections/Banner/Banner";
import Background from "../assets/Background/background.jpg"
import BannerCards from "./Sections/BannerCards/BannerCards";

const Home = () => {
    return (
        <div style={{backgroundImage:`url(${Background})`}}>
            <Navbar />
            <Banner />
            <BannerCards />
        </div>
    );
};

export default Home;