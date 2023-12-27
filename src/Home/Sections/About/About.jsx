import Heading from "../../Components/Heading/Heading";
import SubHeading from "../../Components/SubHeading/SubHeading";
import about1 from "../../../assets/Others/about1.jpg";
import about2 from "../../../assets/Others/about2.jpg";
import ComponentLayout from "../../ComponentLayout/ComponentLayout";
import { SlBadge } from "react-icons/sl";


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

    return (
        <div className="my-36">
            <SubHeading>About Me</SubHeading>
            <Heading>A Passionate Developer Who Loves to Code</Heading>
            <ComponentLayout>
                <div className="flex items-center">
                    <div className="w-1/2">
                        <div className="text-6xl text-white p-3 bg-blue-400 rounded-lg w-fit relative top-48"><SlBadge /></div>
                        <img className="w-3/6 rounded-2xl mx-auto" src={about1} alt="" />
                        <img className="rounded-2xl w-2/5 -mt-24" src={about2} alt="" />
                        <div className="flex items-center text-sm border-l-8 border-blue-400 font-semibold relative left-1/2 bottom-20 text-white"><span className="text-5xl px-3">1</span> <span className="pt-1">Successful <br /> Years</span> </div>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-3xl font-semibold text-white">About Me</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero facilis dolor accusantium cumque repellat dolorem atque nobis, corporis molestiae.</p>
                        <div className="border rounded-xl border-gray-400 my-10">
                            <div className="flex">
                                {/* First Column */}
                                <div className="flex-1 p-8 border-r border-gray-400">
                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Name:</h2>
                                        <p>{data1.name}</p>
                                    </div>

                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Email:</h2>
                                        <p>{data1.email}</p>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-white">Phone:</h2>
                                        <p>{data1.phone}</p>
                                    </div>
                                </div>

                                {/* Second Column */}
                                <div className="flex-1 p-8">
                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Address:</h2>
                                        <p>{data2.address}</p>
                                    </div>

                                    <div className="mb-4">
                                        <h2 className="text-lg font-semibold text-white">Degree:</h2>
                                        <p>{data2.degree}</p>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-white">Freelance:</h2>
                                        <p>{data2.freelance}</p>
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