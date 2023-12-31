import Heading from "../../Components/Heading/Heading";
import SubHeading from "../../Components/SubHeading/SubHeading";
import about1 from "../../../assets/Others/about1.jpg";
import about2 from "../../../assets/Others/about2.jpg";
import ComponentLayout from "../../ComponentLayout/ComponentLayout";
import { SlBadge } from "react-icons/sl";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import Tilt from 'react-parallax-tilt';


const About = () => {

    const data1 = {
        name: 'Siyam Mahdi',
        email: 'siyammahdi1@gmai.com',
        phone: '01774010501',
    };

    const data2 = {
        address: 'Kurigram, Bangladesh',
        degree: 'N/A',
        freelance: 'Available',
    };

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, []);

    const lets = "let's"

    return (
        <div id="about" className="my-24 lg:my-36">
            <SubHeading>About Me</SubHeading>
            <Heading>A Passionate Developer Who <br /> Loves to Code</Heading>
            <ComponentLayout>
                <div className="flex flex-col lg:flex-row items-start mt-20">
                    <div className="lg:w-1/2 p-3">
                        <div data-aos="fade-right" data-aos-delay={500} className="hidden lg:block text-6xl text-white p-3 bg-blue-400 rounded-lg w-fit relative top-48"><SlBadge /></div>
                        <div className="lg:mx-0 mx-8">
                            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
                                <img className="w-3/6 rounded-2xl mx-auto" src={about1} alt="" />
                            </Tilt>
                            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
                                <img className="rounded-2xl w-2/5 -mt-24" src={about2} alt="" />
                            </Tilt>
                        </div>
                        <div data-aos="fade-left" data-aos-delay={100} className="lg:flex items-center text-sm border-l-8 border-blue-400 font-semibold hidden relative left-1/2 lg:bottom-20 bottom-6 text-white"><span className="text-5xl px-3">1</span> <span className="pt-1">Successful <br /> Years</span> </div>
                    </div>
                    <div className="mx-5 lg:w-1/2 pt-10 lg:pt-0">
                        <div>
                            <h2 className="text-xl lg:text-3xl font-semibold text-white">About Me</h2>
                            <p className="text-sm lg:text-base py-3">Welcome to the digital realm where lines of code weave my story! I am a passionate web developer, crafting virtual experiences that transcend pixels. With a keen eye for design and a love for problem-solving, I transform concepts into interactive realities. My journey in the ever-evolving world of web development is a testament to my commitment to innovation. Constantly seeking new challenges, I thrive on turning ideas into elegant, functional websites. Join me on this coding adventure, where every project is an opportunity to create something extraordinary. {lets} build the future of the web together. one line of code at a time.</p>
                        </div>
                        <div className="border rounded-xl border-gray-600 my-10" data-aos="fade-up" data-aos-delay={0}>
                            <div className="flex flex-col lg:flex-row">
                                {/* First Column */}
                                <div className=" flex-1 p-8 border-b lg:border-r border-gray-600">
                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Name</h2>
                                        <p className="text-sm lg:text-base">{data1.name}</p>
                                    </div>

                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Email</h2>
                                        <p className="text-sm lg:text-base">{data1.email}</p>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-white">Phone</h2>
                                        <p className="text-sm lg:text-base">{data1.phone}</p>
                                    </div>
                                </div>

                                {/* Second Column */}
                                <div className="flex-1 p-8">
                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Address</h2>
                                        <p className="text-sm lg:text-base">{data2.address}</p>
                                    </div>

                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Degree</h2>
                                        <p className="text-sm lg:text-base">{data2.degree}</p>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-white">Freelance</h2>
                                        <p className="text-sm lg:text-base">{data2.freelance}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </ComponentLayout>
        </div>
    );
};

export default About;