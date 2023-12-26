import Navbar from "./Navbar/Navbar";
import Banner from "./Sections/Banner/Banner";
import Background from "../assets/Background/background.jpg"

const Home = () => {
    return (
        <div style={{backgroundImage:`url(${Background})`}}>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Home;