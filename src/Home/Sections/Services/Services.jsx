// src/components/Services.jsx

import ComponentLayout from "../../ComponentLayout/ComponentLayout";
import Heading from "../../Components/Heading/Heading";
import SubHeading from "../../Components/SubHeading/SubHeading";
import { FaReact } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { FiLink } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa";
import { GoVersions } from "react-icons/go";
import Tilt from 'react-parallax-tilt';
import { Waypoint } from "react-waypoint";
import { useEffect } from "react";
import Aos from "aos";



const servicesData = [
    {
      id: 1,
      icon: <TbWorldCode />,
      title: 'Web Application Development',
      detail: 'Crafting scalable and interactive web applications using cutting-edge front-end technologies such as React.js. From concept to implementation, ensuring a seamless user experience.',
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: 'Responsive Web Design',
      detail: 'Designing responsive and mobile-friendly interfaces to guarantee optimal user experiences across a variety of devices and screen sizes. Utilizing media queries and flexible layouts for cross-device compatibility.',
    },
    {
      id: 3,
      icon: <FaReact />,
      title: 'Front-end Frameworks and Libraries',
      detail: 'Expertise in utilizing front-end frameworks and libraries like React.js to streamline development processes, enhance code maintainability, and provide a foundation for creating feature-rich user interfaces.',
    },
    {
      id: 4,
      icon: <GoVersions />,
      title: 'Component-Based Architecture',
      detail: 'Implementing a modular and scalable component-based architecture in React.js to create maintainable and reusable code. Enhancing code organization and promoting efficient collaboration in development teams.',
    },
    {
      id: 5,
      icon: <FaGitAlt />,
      title: 'Version Control',
      detail: 'Proficient in version control systems like Git for tracking changes, managing collaborative development workflows, and ensuring code integrity. Facilitating seamless collaboration and efficient code deployment.',
    },
    {
      id: 6,
      icon: <FiLink />,
      title: 'API Integration',
      detail: 'Integrating with backend APIs seamlessly, ensuring efficient data retrieval and synchronization between the frontend and backend. Experience in connecting front-end applications with RESTful APIs built on technologies like Node.js.',
    },
  ];
  

const Services = () => {

    useEffect(() => {
        Aos.init({
            duration: 600,
        });
    }, []);

    return (
        <ComponentLayout>
            <SubHeading>Services</SubHeading>
            <Heading>What I Do for My Clients</Heading>
            <div className="container mx-auto py-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <Tilt key={service.id} tiltMaxAngleX={6} tiltMaxAngleY={6}>
                            <Waypoint>
                                <div className="bg-purple-950 p-6 h-full rounded-lg shadow-md" data-aos="fade-up"
                                    data-aos-delay={(service.id - 1) * 250}>
                                    <div className="text-5xl py-3 mb-4 text-cyan-400">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                    <p className="text-gray-400">{service.detail}</p>
                                </div>
                            </Waypoint>
                        </Tilt>
                    ))}
                </div>
            </div>
        </ComponentLayout>
    );
};

export default Services;
