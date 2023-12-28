import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import ComponentLayout from '../../ComponentLayout/ComponentLayout';
import SkillImg1 from '../../../assets/Others/skills1.jpg';
import SkillImg2 from '../../../assets/Others/skills2.png';
import Heading from '../../Components/Heading/Heading';
import SubHeading from '../../Components/SubHeading/SubHeading';
import { FaCode } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const skillsData = [
    { id: 1, label: 'HTML', percentage: 90 },
    { id: 2, label: 'CSS', percentage: 85 },
    { id: 3, label: 'Tailwind', percentage: 80 },
    { id: 4, label: 'JavaScript', percentage: 85 },
    { id: 5, label: 'React', percentage: 80 },
    { id: 6, label: 'Firebase', percentage: 75 },
    { id: 7, label: 'Node.js', percentage: 55 },
    { id: 8, label: 'Express.js', percentage: 50 },
    { id: 9, label: 'MongoDB', percentage: 70 },
];

const Skills = () => {
    const [isAnimated, setAnimated] = useState(false);

    const handleWaypointEnter = () => {
        setTimeout(() => {
            setAnimated(true);
        }, 200); // Set the delay time in milliseconds
    };

    return (
        <ComponentLayout>
            <div className="py-10">
                <SubHeading>Skills</SubHeading>
                <Heading>I Work Hard to Improve My Skills Regularly</Heading>
                <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-8 my-10">
                    <div className="space-y-5">
                        {skillsData.map((skill, index) => (
                            <div key={skill.id} className="relative">
                                <Waypoint onEnter={handleWaypointEnter} bottomOffset="20%">
                                    <div className={`flex items-center mb-2 ${isAnimated ? 'animated' : ''}`}>
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <p className="font-semibold flex items-center text-white" style={{ transitionDelay: `${isAnimated ? index * 0.2 : 0}s` }}>
                                            {skill.label}
                                            <span className="flex-grow"></span>
                                        </p>
                                        <span
                                            className={`ml-2 text-blue-500 font-semibold`}
                                            style={{
                                                transitionDelay: `${isAnimated ? index * 0.2 : 0}s`,
                                            }}
                                        >{skill.percentage}%</span>
                                    </div>
                                </Waypoint>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: `${isAnimated ? skill.percentage : 0}%`, transitionDelay: `${isAnimated ? index * 0.2 : 0}s` }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-r-sm bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:block pt-20">
                        {/* Image or Icon for the right side */}
                        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
                            <img
                                src={SkillImg1}
                                alt="Skills"
                                className="max-w-full h-auto rounded-2xl w-2/3 ml-auto"
                            />
                        </Tilt>
                        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
                            <img
                                src={SkillImg2}
                                alt="Skills"
                                className="max-w-full h-auto rounded-2xl w-2/4 -mt-20  ml-20"
                            />
                        </Tilt>
                        <div className='bg-blue-400 rounded-lg p-3 w-fit relative text-white text-5xl left-3/4 bottom-32'><FaCode /></div>
                    </div>
                </div>
            </div>
        </ComponentLayout>
    );
};

export default Skills;
