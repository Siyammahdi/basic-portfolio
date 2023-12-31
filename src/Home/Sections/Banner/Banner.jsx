import { useEffect } from "react";
import Profile from "../../../assets/Profile/profile.png";
import ComponentLayout from "../../ComponentLayout/ComponentLayout";
import Tilt from "react-parallax-tilt";
import Button from "../../Components/Button/Button";
import { Waypoint } from "react-waypoint";
import Aos from "aos";
import { Link } from "react-scroll";
import { saveAs } from "file-saver";
import Resume from "../../../assets/Resume/SiyammahdiResume.pdf";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  const handleDownloadResume = () => {
    saveAs(Resume, "SiyammahdiResume.pdf");
  };

  return (
    <div id="home">
      <div data-aos="zoom-in" className="hero min-h-screen">
        <ComponentLayout>
          <Waypoint>
            <div className="hero-content justify-between flex-col p-0 lg:flex-row-reverse">
              <Tilt tiltReverse={true} tiltMaxAngleX={7} tiltMaxAngleY={7}>
                <div>
                  <img
                    src={Profile}
                    className="lg:w-80 w-2/4 mx-auto rounded-full shadow-2xl lg:mr-20"
                    alt="Profile"
                  />
                </div>
              </Tilt>
              <div className="lg:w-1/2 mx-5">
                <h1
                  className="text-3xl lg:text-6xl font-bold text-white"
                  style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundImage:
                      'linear-gradient(to right, #ffff, #b783fe)',
                  }}
                >
                  Siyam Mahdi
                </h1>
                <p className="py-6 font-semibold text-sm lg:text-lg">
                  Elevating web experiences with precision. Coding and
                  innovating for a digital journey.
                </p>
                <div className="flex gap-3">
                  <Link smooth={true} to="contact">
                    <Button>Get Connected</Button>
                  </Link>
                  <button onClick={handleDownloadResume}>
                    <Button>CV/Resume</Button>
                  </button>
                </div>
              </div>
            </div>
          </Waypoint>
        </ComponentLayout>
      </div>
    </div>
  );
};

export default Banner;
