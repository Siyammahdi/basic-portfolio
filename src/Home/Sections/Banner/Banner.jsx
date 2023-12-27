import Profile from "../../../assets/Profile/profile.png"
import ComponentLayout from "../../ComponentLayout/ComponentLayout";
import Tilt from 'react-parallax-tilt';
import Button from "../../Components/Button/Button";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <ComponentLayout>
                    <div className="hero-content justify-between flex-col p-0 lg:flex-row-reverse">
                        <Tilt tiltReverse={true} tiltMaxAngleX={7} tiltMaxAngleY={7}>
                            <div>
                                <img src={Profile} className="max-w-xs rounded-full shadow-2xl mr-20" />
                            </div>
                        </Tilt>
                        <div className="w-1/2 ">
                            <h1 className="text-6xl font-bold text-white" style={{ WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", backgroundImage: 'linear-gradient(to right, #ffff, #b783fe)' }}>Siyam Mahdi</h1>
                            <p className="py-6">Professional MERN Stack Web Developer. Working worldwide with international clients</p>
                            <Button>Get Connected</Button>
                        </div>
                    </div>
                </ComponentLayout>
            </div>
        </div>
    );
};

export default Banner;